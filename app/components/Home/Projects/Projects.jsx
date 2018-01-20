import _ from 'lodash';
import React from 'react';
import styles from './projects.scss';
import ProjectThumbnail from './ProjectThumbnail';

import projectData from '../../../data/projects';

const Projects = () => {
  const projects = _.map(projectData, ({ name, thumbImg }, index) => {
    return (
      <ProjectThumbnail
        key={`${name}-${index}`}
        name={name}
        img={thumbImg}
      />
    );
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainTitle}>
        Projects
      </div>
      <div className={styles.projectsContainer}>
        {projects}
      </div>

    </div>
  );
};

export default Projects;
