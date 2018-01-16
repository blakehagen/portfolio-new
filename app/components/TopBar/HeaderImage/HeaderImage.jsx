import React from 'react';
import styles from './headerImage.scss';

const HeaderImage = ({ image }) => {
  console.log('image -->', image);
  return (
    <div className={styles.wrapper}>
      <img src={image} alt="Blake Hagen" />
    </div>
  );
};

export default HeaderImage;
