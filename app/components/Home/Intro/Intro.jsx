import React from 'react';
import styles from './intro.scss';

const Intro = () => {
  const mePic = require('./images/profile_bw-compressor.jpg');
  const skills = ['JavaScript', 'React', 'Angular', 'Node', 'SQL', 'PostgreSQL'];
  const skillTags = _.map(skills, (skill, index) => (
    <div key={index} className={styles.skillTag}>
      {skill}
    </div>
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={mePic} alt="Blake Hagen" />
      </div>

      <div className={styles.textWrapper}>
        <div className={styles.firstName}>
          <p>Blake <span className={styles.lastName}>Hagen</span></p>
        </div>
        <div className={styles.tag}>
          <p>Full-stack Developer</p>
        </div>
        <div className={styles.description}>
          <p>
            Hi, I'm Blake. I'm a full-stack JavaScript developer based in the Provo, UT area.
            I'm a husband, father, coder, triathlete, food lover, and sports nut. I currently work as a developer at&nbsp;
            <a href="https://www.grow.com/" target="_blank" rel="noopener noreferrer">Grow.com</a>. Holler at me if you'd like to work on something together.
          </p>
        <div className={styles.tagContainer}>
            {skillTags}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
