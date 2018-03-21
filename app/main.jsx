import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
import App from '../app/components/App';
import Home from '../app/components/Home';
import Contact from '../app/components/Contact';
import ProjectDetail from '../app/components/ProjectDetail';

import styles from './main.scss';

function checkProjectRoute(nextState, replace) {
  const routes = [
    'mindset-family-therapy',
    'budget-watcher',
    'groopscoop',
    'local-pair',
    'futbolwatch',
    'task-checkr',
    'location-checkr',
    'blackjack',
    'fitstantly',
  ];

  const nextProjectRoute = _.get(nextState, 'params.name', null);
  if (!_.includes(routes, nextProjectRoute)) {
    replace('/');
  }
}

render(
  <div className={styles.appBody}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="contact" component={Contact} />
        <Route path=":name" onEnter={checkProjectRoute} component={ProjectDetail} />
      </Route>

      <Route path="*" component={App}>
        <IndexRedirect to="/" />
      </Route>
    </Router>
  </div>, document.getElementById('app'),
);

