import React from 'react';
import styles from './Title.module.scss';
import line from '../../assets/images/homepage/title.svg';

const Title = ({ title }) => (
  <div className={styles.wrapper}>
    <div className={styles.line}>
      <img src={line} alt="line" />
    </div>
    <div className={styles.title}>
      {title}
    </div>
  </div>
);

export default Title;
