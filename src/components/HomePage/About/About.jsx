import React from 'react';
import styles from './About.module.scss';
import frame from '../../../assets/images/homepage/about/linear.svg';
import frameMobile from '../../../assets/images/homepage/about/linear_mobile.svg';
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
    <h1 className={styles.title}>
      BELGAMEDEV
      <br />
      <span>AWARDS</span>
    </h1>
    <div className={styles.description}>
      <div className={styles.frame}>
        <img src={frame} alt="frame" />
      </div>
      <div className={styles.frameMobile}>
        <img src={frameMobile} alt="frame" />
      </div>
      <div className={styles.text}>
        BelGameDev Awards 2020 - третий ежегодный национальный конкурс, направленный на поощрение, признание инноваций и совершенства в искусстве создания игр в Беларуси. BelGameDev Awards отмечает и популяризирует творческий, дизайнерский и технический гений лучших игр, выпущенных с 01.08.2019 по 01.08.2020. Отдельной категорией (игры в разработке) с целью мотивации, поддержки и привлечения внимания к наиболее интересным проектам рассматриваются игровые стартапы.
      </div>
    </div>
  </div>
);

export default About;
