import React from 'react';
import PropTypes from 'prop-types';

const App = props => (
  <div>
    {console.log(props)}
    Hello I am the app!
    <div>
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
