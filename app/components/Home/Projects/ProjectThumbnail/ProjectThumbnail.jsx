import React from 'react';
import PropTypes from 'prop-types';
import styles from './projectThumbnail.scss';

const ProjectThumbnail = ({ name, img }) => (
  <div className={styles.wrapper}>
    <img src={img} />
    {/*{name}*/}
    {/*<br />*/}
    {/*{img}*/}
  </div>
);

ProjectThumbnail.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ProjectThumbnail;
