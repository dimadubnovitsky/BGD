import React from 'react';
import parse from 'html-react-parser';
import styles from './Member.module.scss';
import сircle from '../../../../assets/images/homepage/jury/circle.svg';

const Member = ({ name, description, photo }) => (
  <div className={styles.wrapper}>
    <div className={styles.image}>
      <img src={сircle} alt="сircle" />
      <div className={styles.photo}>
        <img src={photo} alt="photo" />
      </div>
    </div>
    <div className={styles.text}>
      <div className={styles.name}>
        {parse(name)}
      </div>
      <div className={styles.description}>
        {parse(description)}
      </div>
    </div>
  </div>
);

export default Member;
