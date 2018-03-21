import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './projectDetail.scss';
import projectData from '../../data/projects';

const ProjectDetail = (props) => {
  const currentProject = _.find(projectData, { route: props.params.name });

  return (
    <div className={styles.wrapper}>
      {currentProject.name}
    </div>
  );
};

export default ProjectDetail;

ProjectDetail.propTypes = {
  params: PropTypes.object.isRequired,
};

