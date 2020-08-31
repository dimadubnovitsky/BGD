import React from 'react';
import styles from './Organizers.module.scss';
import Title from '../../Title/Title';
import frame from '../../../assets/images/homepage/organizers/frame.svg';
import border from '../../../assets/images/homepage/organizers/border.svg';
import frameMobile from '../../../assets/images/homepage/organizers/frame_mobile.svg';

const Organizers = () => (
  <div className={styles.wrapper} id="organizers">
    <div className={styles.container}>
      <Title title="Организаторы" />
      <div className={styles.content}>
        <div className={styles.border}>
          <img src={border} alt="border" />
        </div>
        <div className={styles.frameLeft}>
          <img src={frame} alt="frame" />
        </div>
        <div className={styles.frameRight}>
          <img src={frame} alt="frame" />
        </div>
        <div className={styles.textBgd}>
          <div className={styles.frameMobile}>
            <img src={frameMobile} alt="frame" />
          </div>
          <div className={styles.title}>BelGameDev</div>
          <div className={styles.description}>Cоциальный, некоммерческий проект-платформа для развития и консолидации индустрии разработки игр, для обучения сообщества разработчиков игр и привлечения всемирно известных специалистов и организаций в нашу страну, для обмена знаниями и опытом, для плодотворного сотрудничества специалистов, а также для осуществления представительства отечественной индустрии разработки игр в международных проектах и организациях.</div>
        </div>
        <div className={styles.textIgda}>
          <div className={styles.frameMobile}>
            <img src={frameMobile} alt="frame" />
          </div>
          <div className={styles.title}>IGDA Belarus</div>
          <div className={styles.description}>Это белорусское подразделение международной ассоциации разработчиков игр (IGDA), чья заявленная миссия заключается в том, чтобы «поддерживать и расширять возможности разработчиков игр по всему миру в достижении успешной и устойчивой карьеры».</div>
        </div>
      </div>
    </div>
  </div>
);

export default Organizers;
