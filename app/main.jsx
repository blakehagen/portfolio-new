import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from '../app/components/App';

import styles from './main.scss';

ReactDOM.render(
  <div className={styles.appBody}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </div>, document.getElementById('app'),
);
