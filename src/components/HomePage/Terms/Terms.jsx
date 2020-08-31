import React from 'react';
import styles from './Terms.module.scss';
import Title from '../../Title/Title';
import frame from '../../../assets/images/homepage/terms/frame.svg';
import corner from '../../../assets/images/homepage/terms/corner.svg';
import lines from '../../../assets/images/homepage/terms/lines.svg';

const Terms = () => (
  <div className={styles.wrapper} id="terms">
    <div className={styles.container}>
      <Title title="Условия участия" />
      <div className={styles.terms}>
        <div className={styles.frames}>
          <div className={styles.framesItem}>
            <div className={styles.frame}>
              <img src={frame} alt="frame" />
            </div>
            <div className={styles.description}>
              <span>Формат:</span>
              <span>Онлайн</span>
            </div>
          </div>
          <div className={styles.framesItem}>
            <div className={styles.frame}>
              <img src={frame} alt="frame" />
            </div>
            <div className={styles.description}>
              <span>Участие:</span>
              <span>Бесплатно</span>
            </div>
          </div>
          <div className={styles.framesItem}>
            <div className={styles.frame}>
              <img src={frame} alt="frame" />
            </div>
            <div className={styles.description}>
              <span>Голос проекта:</span>
              <span>mike bodie</span>
            </div>
          </div>
          <div className={styles.framesItem}>
            <div className={styles.frame}>
              <img src={frame} alt="frame" />
            </div>
            <div className={styles.description}>
              <span>
                Режиссер
                <br />
                визуального ряда:
              </span>
              <span>
                СУББОТИН
                <br />
                МАКСИМ
              </span>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <div className={styles.leftTop}>
              <img src={corner} alt="corner" />
            </div>
            <div className={styles.leftBot}>
              <img src={corner} alt="corner" />
            </div>
            <div className={styles.rightTop}>
              <img src={corner} alt="corner" />
            </div>
            <div className={styles.rightBot}>
              <img src={corner} alt="corner" />
            </div>
            Дедлайн подачи заявок до
            {' '}
            <span>31.08.2020</span>
            <br />
            <br />
            Первая неделя сентября - работа жюри
            <br />
            <br />
            Объявление победителей по категории
            {' '}
            <span>1 - 12.09.2020</span>
            {' '}
            (даты могут несущественно измениться)
            <br />
            <br />
            Объявление победителей по категории
            {' '}
            <span>2 - 13.09.2020</span>
            {' '}
            (даты могут несущественно измениться)
          </div>
          <a href="https://forms.gle/MSoHgu9m8n9wTB4s7" target="_blank" rel="noreferrer noopener" className={styles.button}>
            Отправить заявку
          </a>
        </div>
      </div>
      <div className={styles.linesImg}>
        <img src={lines} alt="lines" />
      </div>
    </div>
  </div>
);

export default Terms;
