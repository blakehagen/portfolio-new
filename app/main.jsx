import React from 'react';
import ReactDOM from 'react-dom';

import styles from './main.scss';

ReactDOM.render(
  <div className={styles.container}>
    Hello World! NEW PORTFOLIO!
    {console.log('hello there!')}
  </div>, document.getElementById('app'),
);
