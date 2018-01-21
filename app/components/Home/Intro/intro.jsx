import React from 'react';
import styles from './intro.scss';

const Intro = () => {
  const mePic = require('./images/profile_bw-compressor.jpg');

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={mePic} alt="Blake Hagen" />
      </div>

      <div className={styles.textWrapper}>
        <div className={styles.firstName}>
          Blake <span className={styles.lastName}>Hagen</span>
        </div>
        <div className={styles.tag}>
          Full-stack Developer
        </div>
        <div className={styles.description}>
          Hi, I'm Blake. I'm a full-stack JavaScript developer based out of the Provo, UT area and I like to build stuff.
          I'm a husband, father, coder, triathlete, sports nut, and lover of faith, food, and fun.
          <br /> <br />
          I have experience with
          <span className={styles.skillTag}> React</span>,
          <span className={styles.skillTag}> Webpack</span>,
          <span className={styles.skillTag}> MobX</span>,
          <span className={styles.skillTag}> Angular 1.x</span>,
          <span className={styles.skillTag}> PostgreSQL</span>,
          <span className={styles.skillTag}> Node</span>,
          and more. Check out my stuff and holler at me if you'd like to work together on something.
        </div>
      </div>
    </div>
  );
};

export default Intro;
