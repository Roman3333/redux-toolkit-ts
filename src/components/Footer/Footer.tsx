import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>Footer</div>
      </div>
    </footer>
  );
};

export default Footer;
