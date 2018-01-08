import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
import App from '../app/components/App';
import Home from '../app/components/Home';
import About from '../app/components/About';

import styles from './main.scss';

render(
  <div className={styles.appBody}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
      </Route>

      <Route path="*" component={App}>
        <IndexRedirect to="/" />
      </Route>
    </Router>
  </div>, document.getElementById('app'),
);
