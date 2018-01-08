import React from 'react';
import styles from './topbar.scss';

const TopBar = () => (
  <div className={styles.topBarWrapper}>
    <div className={styles.box}>
      Blake M. Hagen
    </div>

    <div className={styles.box}>
      box2
    </div>
  </div>
);

export default TopBar;
