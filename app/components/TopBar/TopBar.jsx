import React from 'react';
import styles from './topbar.scss';

const TopBar = () => {
  const github = <a href="https://github.com/blakehagen" rel="noopener noreferrer" target="_blank"><i className="fa fa-github" aria-hidden="true" /></a>;
  const linkedIn = <a href="https://linkedin.com/in/blakehagen" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin" aria-hidden="true" /></a>;
  const twitter = <a href="https://twitter.com/blakehagen" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter" aria-hidden="true" /></a>;
  const contact = <i className="fa fa-envelope-o" aria-hidden="true" />;

  return (
    <div className={styles.topBarWrapper}>
      <div className={styles.topBarActual}>
        <div className={styles.left}>
          {/*Blake Hagen*/}
        </div>

        <div className={styles.iconContainer}>
          {github}
          {linkedIn}
          {twitter}
          {contact}
        </div>

      </div>
    </div>
  );
};

export default TopBar;
