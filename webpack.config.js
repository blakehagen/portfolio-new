const _ = require('lodash');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body',
});

const useProductionBuild = _.includes(['production', 'development'], process.env.NODE_ENV);

const webpackConfig = {
  entry: {
    app: ['./app/main.jsx'],
  },
  output: {
    path: `${__dirname}/server/public`,
    publicPath: '/',
    filename: 'index_bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [autoprefixer({ browsers: ['> 1%', 'last 5 versions', 'Firefox ESR', 'safari >= 4'] })];
                },
              },
            },
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin('style.css'),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: ({ resource }) => /node_modules/.test(resource),
    // }),
  ],
};

if (useProductionBuild) {
  console.log('useProductionBuild --> ', useProductionBuild);

  webpackConfig.devtool = 'cheap-source-map';

  webpackConfig.plugins.push(new UglifyJSPlugin({
    sourceMap: true,
    uglifyOptions: {
      compress: {
        warnings: false,
        drop_console: false,
      },
      output: {
        comments: false,
      },
    },
  }));

  webpackConfig.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }));
} else {
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  webpackConfig.entry.app.unshift('webpack-hot-middleware/client?reload=true');
}

module.exports = webpackConfig;
