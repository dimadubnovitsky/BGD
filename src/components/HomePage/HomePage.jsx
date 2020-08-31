import React from 'react';
import styles from './HomePage.module.scss';
import About from './About/About';
import Jury from './Jury/Jury';
import Terms from './Terms/Terms';
import Nominations from './Nominations/Nominations';
import Partners from './Partners/Partners';
import Organizers from './Organizers/Organizers';
import neon from '../../assets/images/homepage/neon.svg';
import circle from '../../assets/images/homepage/circle.svg';
import triangle from '../../assets/images/homepage/triangle.svg';
import B from '../../assets/images/homepage/B.svg';
import A from '../../assets/images/homepage/A.svg';
import Y from '../../assets/images/homepage/Y.svg';
import X from '../../assets/images/homepage/X.svg';
import square from '../../assets/images/homepage/square.svg';
import dots from '../../assets/images/homepage/dots.svg';

const HomePage = () => (
  <div className={styles.wrapper}>
    <About />
    <Jury />
    <Terms />
    <Nominations />
    <Partners />
    <Organizers />
    <img className={styles.neonImg} src={neon} alt="neon" />
    <img className={styles.circleImg} src={circle} alt="circle" />
    <img className={styles.triangleImg} src={triangle} alt="triangle" />
    <img className={styles.BImg} src={B} alt="B" />
    <img className={styles.AImg} src={A} alt="A" />
    <img className={styles.YImg} src={Y} alt="Y" />
    <img className={styles.XImg} src={X} alt="X" />
    <img className={styles.squareImg} src={square} alt="square" />
    <img className={styles.dotsImg} src={dots} alt="dots" />
  </div>
);

export default HomePage;
