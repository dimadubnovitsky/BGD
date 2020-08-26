import React from 'react';
import styles from './App.module.scss';
import HomePage from './HomePage/HomePage';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const App = () => (
  <div className={styles.app}>
    <Header />
    <HomePage />
    <Footer />
  </div>
);

export default App;
