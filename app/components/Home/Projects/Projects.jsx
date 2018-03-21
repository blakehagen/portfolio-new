import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import styles from './projects.scss';
import ProjectThumbnail from './ProjectThumbnail';
import projectData from '../../../data/projects';

const Projects = () => {
  const projects = _.map(projectData, ({ name, thumbImg, url }, index) => (
    <Link
      to={url}
      key={`${name}-${index}`}
      style={{ width: 300, height: 195, margin: 15 }}
    >
      <ProjectThumbnail
        name={name}
        img={thumbImg}
      />
    </Link>
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainTitle}>
        Past Projects
      </div>
      <div className={styles.projectsContainer}>
        {projects}
      </div>
    </div>
  );
};

export default Projects;
