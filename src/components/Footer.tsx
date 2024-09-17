import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>Visite o nosso trabalho no</p>
        <a href="https://github.com/AngelloTDC/React-TS-Sprint3" target="_blank" rel="noopener noreferrer">
          Git-Hub!
        </a>
        <p>Visite o site oficial</p>
        <a href="https://www.portoseguro.com.br" target="_blank" rel="noopener noreferrer">
          Porto-Seguro!
        </a>
      </div>
    </footer>
  );
};

export default Footer;

