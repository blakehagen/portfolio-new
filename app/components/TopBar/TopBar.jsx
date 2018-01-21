import React from 'react';
// import HeaderImage from './HeaderImage';
import styles from './topbar.scss';

const TopBar = () => {
  return (
    <div className={styles.topBarWrapper}>
      <div className={styles.topBarActual}>
        <div className={styles.box}>
          something here
        </div>

        <div className={styles.box}>
          something here
        </div>

      </div>
    </div>
  );
};

export default TopBar;
