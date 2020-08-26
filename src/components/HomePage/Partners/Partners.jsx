import React from 'react';
import styles from './Partners.module.scss';
import Title from '../../Title/Title';
import PartnersSlider from './PartnersSlider/PartnersSlider';

const Partners = () => (
  <div className={styles.wrapper} id="partners">
    <div className={styles.container}>
      <Title title="Партнеры" />
      <PartnersSlider />
    </div>
  </div>
);

export default Partners;
