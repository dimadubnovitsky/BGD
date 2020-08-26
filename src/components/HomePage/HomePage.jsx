import React from 'react';
import styles from './HomePage.module.scss';
import About from './About/About';
import Jury from './Jury/Jury';
import Terms from './Terms/Terms';
import Nominations from './Nominations/Nominations';
import Partners from './Partners/Partners';
import Organizers from './Organizers/Organizers';

const HomePage = () => (
  <div className={styles.wrapper}>
    <About />
    <Jury />
    <Terms />
    <Nominations />
    <Partners />
    <Organizers />
  </div>
);

export default HomePage;
