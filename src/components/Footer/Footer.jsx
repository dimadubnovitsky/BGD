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
          <img src={mail} alt="mail" />
          <a href="mailto:belgamedev@gmail.com">
            <span>belgamedev@gmail.com</span>
          </a>
        </div>
        <div className={styles.phone}>
          <img src={phone} alt="phone" />
          <a href="tel:+375336656407">+375 33 665 64 07</a>
        </div>
      </div>
      <div className={styles.social}>
        <div className={styles.title}>social networks</div>
        <div className={styles.links}>
          <a href="https://twitter.com/BelGameDev?s=09" target="_blank" rel="noreferrer noopener">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://www.facebook.com/belgamedev" target="_blank" rel="noreferrer noopener">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://vk.com/belgamedev" target="_blank" rel="noreferrer noopener">
            <img src={vk} alt="vk" />
          </a>
          <a href="https://t.me/belgamedev" target="_blank" rel="noreferrer noopener">
            <img src={telegram} alt="telegram" />
          </a>
        </div>
      </div>
    </div>
    <div className={styles.copyright}>© 2020  BELGAMEDEV AWARDS</div>
  </div>
);

export default Footer;
