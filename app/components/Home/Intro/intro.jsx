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
          Full-stack Web Developer
        </div>

        <div className={styles.description}>
          Hi, I'm Blake. I'm a full-stack web developer based out of the Provo, UT area and I enjoy building stuff.
        </div>
        <div className={styles.description}>
          I believe in clean, efficient code, responsive design, and simplicity. I have experience with
          <span className={styles.skillTag}> React</span>,
          <span className={styles.skillTag}> Webpack</span>,
          <span className={styles.skillTag}> MobX</span>,
          <span className={styles.skillTag}> Angular 1.x</span>,
          <span className={styles.skillTag}> PostgreSQL</span>,
          <span className={styles.skillTag}> Node</span>,
          and more. If I don't have experience with something yet, I can learn it.
        </div>

      </div>

    </div>
  );
};

export default Intro;
