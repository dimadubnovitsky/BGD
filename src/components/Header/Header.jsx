import React, { useState } from 'react';
import { Link } from 'react-scroll';
import classNames from 'classnames';
import styles from './Header.module.scss';
import logo from '../../assets/images/header/logo.png';

const links = [
  {
    title: 'Жюри',
    path: 'jury',
  },
  {
    title: 'Условия участия',
    path: 'terms',
  },
  {
    title: 'Номинации',
    path: 'nominations',
  },
  {
    title: 'Партнеры',
    path: 'partners',
  },
  {
    title: 'Организаторы',
    path: 'organizers',
  },
  {
    title: 'Контакты',
    path: 'footer',
  },
];

const Header = () => {
  const [menuIsOpen, setStateMenu] = useState(false);

  const changeMenuState = () => {
    setStateMenu(!menuIsOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="about" activeClass={styles.active} spy smooth>
            <img src={logo} alt="logo" />
          </Link>

        </div>
        <div className={classNames({
          [styles.navmenu]: true,
          [styles.open]: menuIsOpen,
        })}
        >
          {links.map((link) => (
            <Link to={link.path} activeClass={styles.active} spy smooth onClick={changeMenuState} name={link.title}>{link.title}</Link>
          ))}
        </div>

        {/* <div */}
        {/*  className={classNames({ */}
        {/*    [styles.humburgerMenu]: true, */}
        {/*    [styles.open]: menuIsOpen, */}
        {/*  })} */}
        {/*  onClick={changeMenuState} */}
        {/* > */}
        {/*  <div /> */}
        {/*  <div /> */}
        {/*  <div /> */}
        {/* </div> */}

      </div>
      {/* <div */}
      {/*  className={classNames({ */}
      {/*    [styles.closeWrap]: true, */}
      {/*    [styles.open]: menuIsOpen, */}
      {/*  })} */}
      {/*  onClick={changeMenuState} */}
      {/* /> */}
    </div>
  );
};

export default Header;
