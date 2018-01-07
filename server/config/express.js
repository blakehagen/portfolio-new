// EXPRESS //
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

module.exports = () => {
  const app = express();
  app.use(compression({ threshold: 0 }));

  if (process.env.NODE_ENV !== 'production') {
    app.use(logger('dev'));
  } else {
    app.use(express.static('server/public', { maxAge: 86400000 * 30 /* 30days */ }));
  }

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  return app;
};
