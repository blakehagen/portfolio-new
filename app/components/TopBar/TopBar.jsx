import React from 'react';
// import HeaderImage from './HeaderImage';
import styles from './topbar.scss';

const TopBar = () => {
  const profilePic = require('./images/pic_portfolio-compressor.jpg');

  return (
    <div className={styles.topBarWrapper}>
      {/*<HeaderImage image={profilePic} />*/}
      {/*<div className={styles.box}>*/}
        {/*Blake M. Hagen*/}
      {/*</div>*/}

      {/*<div className={styles.box}>*/}
        {/*box2*/}
      {/*</div>*/}
    </div>
  );
};

export default TopBar;
