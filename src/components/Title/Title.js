import React from 'react';
import styles from './Title.module.scss';
import { ReactComponent as Line } from '../../assets/images/homepage/title.svg';

const Title = ({ title }) => (
  <div className={styles.wrapper}>
    <Line />
    <div className={styles.title}>
      {title}
    </div>
  </div>
);

export default Title;
