import React from 'react';
import styles from './About.module.scss';
import { ReactComponent as TextWrap } from '../../../assets/images/homepage/about/linear.svg';
import head from '../../../assets/images/homepage/about/head.png';

const About = () => (
  <div className={styles.wrapper} id="about">
    <div className={styles.backgroundImg}>
      <img src={head} alt="head" />
    </div>
    <div className={styles.backgroundImg}>
      <img src={head} alt="head" />
    </div>
    <div className={styles.blur} />
    <div className={styles.title}>
      BELGAMEDEV
      <br />
      <span>AWARDS</span>
    </div>
    <div className={styles.description}>
      <TextWrap />
      <div className={styles.text}>
        BelGameDev Awards 2020 - третий ежегодный национальный конкурс, направленный на поощрение, признание инноваций и совершенства в искусстве создания игр в Беларуси. BelGameDev Awards отмечает и популяризирует творческий, дизайнерский и технический гений лучших игр, выпущенных с 01.08.2019 по 01.08.2020. Отдельной категорией (игры в разработке) с целью мотивации, поддержки и привлечения внимания к наиболее интересным проектам рассматриваются игровые стартапы.
      </div>
    </div>
  </div>
);

export default About;
