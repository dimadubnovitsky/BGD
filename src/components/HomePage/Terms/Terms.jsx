import React from 'react';
import styles from './Terms.module.scss';
import Title from '../../Title/Title';
import frame from '../../../assets/images/homepage/terms/frame.svg';
import corner from '../../../assets/images/homepage/terms/corner.svg';

const Terms = () => (
  <div className={styles.wrapper} id="terms">
    <div className={styles.container}>
      <Title title="Условия участия" />
      <div className={styles.terms}>
        <div className={styles.frames}>
          <div className={styles.framesItem}>
            <img src={frame} alt="frame" />
            <div className={styles.description}>
              <span>Формат:</span>
              <span>Онлайн</span>
            </div>
          </div>
          <div className={styles.framesItem}>
            <img src={frame} alt="frame" />
            <div className={styles.description}>
              <span>Участие:</span>
              <span>Бесплатно</span>
            </div>
          </div>
          <div className={styles.framesItem}>
            <img src={frame} alt="frame" />
            <div className={styles.description}>
              <span>Голос проекта:</span>
              <span>mike bodie</span>
            </div>
          </div>
          <div className={styles.framesItem}>
            <img src={frame} alt="frame" />
            <div className={styles.description}>
              <span>Режиссер<br/>визуального ряда:</span>
              <span>СУББОТИН<br/>МАКСИМ</span>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <img className={styles.leftTop} src={corner} alt="corner" />
            <img className={styles.leftBot} src={corner} alt="corner" />
            <img className={styles.rightTop} src={corner} alt="corner" />
            <img className={styles.rightBot} src={corner} alt="corner" />
            Дедлайн подачи заявок до <span>31.08.2020</span><br/><br/>
            Первая неделя сентября - работа жюри<br/><br/>
            Объявление победителей по категории <span>1 - 12.09.2020</span> (даты могут несущественно измениться)<br/><br/>
            Объявление победителей по категории <span>2 - 13.09.2020</span> (даты могут несущественно измениться)
          </div>
          <a href="https://forms.gle/MSoHgu9m8n9wTB4s7" target="_blank" rel="noreferrer noopener" className={styles.button}>
            Отправить заявку
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Terms;
