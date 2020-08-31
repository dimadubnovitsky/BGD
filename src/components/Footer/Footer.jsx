import React from 'react';
import styles from './Footer.module.scss';
import mail from '../../assets/images/footer/mail.svg';
import phone from '../../assets/images/footer/phone.svg';
import twitter from '../../assets/images/footer/twitter.svg';
import facebook from '../../assets/images/footer/facebook.svg';
import vk from '../../assets/images/footer/vk.svg';
import telegram from '../../assets/images/footer/telegram.svg';

const Footer = () => (
  <div className={styles.wrapper} id="footer">
    <div className={styles.container}>
      <div className={styles.contacts}>
        <div className={styles.title}>Контакты</div>
        <div className={styles.email}>
          <div className={styles.mailImg}>
            <img src={mail} alt="mail" />
          </div>
          <a href="mailto:belgamedev@gmail.com">
            <span>belgamedev@gmail.com</span>
          </a>
        </div>
        <div className={styles.phone}>
          <div className={styles.phomeImg}>
            <img src={phone} alt="phone" />
          </div>
          <a href="tel:+375336656407">+375 33 665 64 07</a>
        </div>
      </div>
      <div className={styles.social}>
        <div className={styles.title}>social networks</div>
        <div className={styles.links}>
          <a href="https://twitter.com/BelGameDev?s=09" target="_blank" rel="noreferrer noopener">
            <div className={styles.twitter}>
              <img src={twitter} alt="twitter" />
            </div>
          </a>
          <a href="https://www.facebook.com/belgamedev" target="_blank" rel="noreferrer noopener">
            <div className={styles.facebook}>
              <img src={facebook} alt="facebook" />
            </div>
          </a>
          <a href="https://vk.com/belgamedev" target="_blank" rel="noreferrer noopener">
            <div className={styles.vk}>
              <img src={vk} alt="vk" />
            </div>
          </a>
          <a href="https://t.me/belgamedev" target="_blank" rel="noreferrer noopener">
            <div className={styles.telegram}>
              <img src={telegram} alt="telegram" />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className={styles.copyright}>© 2020  BELGAMEDEV AWARDS</div>
  </div>
);

export default Footer;
