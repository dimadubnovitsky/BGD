import React from 'react';
import styles from './Nominations.module.scss';
import Title from '../../Title/Title';
import frame from '../../../assets/images/homepage/nominations/frame.svg';

const Nominations = () => (
  <div className={styles.wrapper} id="nominations">
    <div className={styles.container}>
      <Title title="Номинации" />
      <div className={styles.nominations}>
        <div className={styles.item}>
          <div className={styles.frame}>
            <img src={frame} alt="frame" />
          </div>
          <div className={styles.text}>
            <div className={styles.title}>Номинации в категории для игр в разработке "in Development":</div>
            <div className={styles.description}>
              Best Visual Art, Best Design, Best Narrative, Best Technology, Best Mobile Game, Best Hypercasual Game, Most Anticipated Game, Game for the People, “The legend s choice”, Best VR/AR
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.frame}>
            <img src={frame} alt="frame" />
          </div>
          <div className={styles.text}>
            <div className={styles.title}>
              Номинации в категории для игр,  "Game of the Year 2020":
            </div>
            <div className={styles.description}>
              Best Visual Art, Best Audio, Best Music, Best Design, Best Narrative, Best Technology, Best Mobile Game, Best Hypercasual Game, Best Game, Game for the People, “The most meaningful gameplay” by 11 Bit, “The legend s choice”, Best VR/AR
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Nominations;
