import _ from 'lodash';
import React from 'react';
// import prop
import styles from './projectThumbnail.scss';

const ProjectThumbnail = ({ name, img }) => (
  <div className={styles.wrapper}>
    <img src={img} />
    {/*{name}*/}
    {/*<br />*/}
    {/*{img}*/}
  </div>
);

export default ProjectThumbnail;
