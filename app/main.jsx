import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
import App from '../app/components/App';
import Home from '../app/components/Home';
import Contact from '../app/components/Contact';
import ProjectDetail from '../app/components/ProjectDetail';
import About from '../app/components/About';

import styles from './main.scss';

function something(nextState, replace) {
  // Do some validation to check project id...
}

render(
  <div className={styles.appBody}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Home} />
        <Route path="project/:id" onEnter={something} component={ProjectDetail} />
        <Route path="contact" component={Contact} />
        <Route path="about" component={About} />
      </Route>

      <Route path="*" component={App}>
        <IndexRedirect to="/" />
      </Route>
    </Router>
  </div>, document.getElementById('app'),
);

