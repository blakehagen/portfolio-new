import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import styles from './projectThumbnail.scss';

class ProjectThumbnail extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      projectHover: false,
    };
  }

  handleMouseEnter() {
    this.setState({ projectHover: true });
  }

  handleMouseLeave() {
    this.setState({ projectHover: false });
  }

  render() {
    const overlay = (
      <div className={styles.overlay}>
        PROJECT DETAILS
      </div>
    );

    return (
      <div
        className={styles.wrapper}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        { this.state.projectHover && overlay }
        <img src={this.props.img} alt={`${this.props.name} Thumbnail`} />
      </div>
    );
  }
}

ProjectThumbnail.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ProjectThumbnail;
