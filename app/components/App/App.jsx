import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../../components/TopBar';
import styles from './app.scss';

const App = ({ children }) => (
  <div className={styles.maxWrapper}>
    <TopBar />
    <div className={styles.main}>
      {children}
    </div>
    {/* FOOTER OR SOMETHING HERE*/}
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
