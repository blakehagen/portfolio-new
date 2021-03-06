import React from 'react';
import { Link } from 'react-router';
import styles from './topbar.scss';

const TopBar = () => {
  const home = (
    <Link to="/">
      <i className="fa fa-home" aria-hidden="true" />
    </Link>
  );

  const contact = (
    <Link to="/contact">
      <i className="fa fa-envelope-o" aria-hidden="true" />
    </Link>
  );

  const github = <a href="https://github.com/blakehagen" rel="noopener noreferrer" target="_blank"><i className="fa fa-github" aria-hidden="true" /></a>;
  const linkedIn = <a href="https://linkedin.com/in/blakehagen" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin" aria-hidden="true" /></a>;
  const twitter = <a href="https://twitter.com/blakehagen" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter" aria-hidden="true" /></a>;

  return (
    <div className={styles.topBarWrapper}>
      <div className={styles.topBarActual}>
        <div className={styles.iconContainer}>
          {home}
          {contact}
          <div className={styles.separator}>|</div>
          {github}
          {linkedIn}
          {twitter}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
