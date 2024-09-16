import React from 'react';
import styles from '../styles/Integrantes.module.css';
import integrante1 from '../assets/integrante1.png';
import integrante2 from '../assets/integrante2.jpg';
import integrante3 from '../assets/integrante3.jpg';

const Integrantes: React.FC = () => {
  return (
    <div className={styles.integrantesContainer}>
      <div className={styles.integrante}>
        <img src={integrante1} alt="Integrante 1" />
        <p>Angello Turano da Costa</p>
        <p>RM556511</p>
        <a href="https://github.com/AngelloTDC" target="_blank" rel="noopener noreferrer">
          Meu GitHub
        </a>
      </div>
      <div className={styles.integrante}>
        <img src={integrante2} alt="Integrante 2" />
        <p>Leonardo Kawachi</p>
        <p>RM558166</p>
        <a href="https://github.com/IHateMyTiming" target="_blank" rel="noopener noreferrer">
          Meu GitHub
        </a>
      </div>
      <div className={styles.integrante}>
        <img src={integrante3} alt="Integrante 3" />
        <p>Victor Nieves Britto Medeiros</p>
        <p>RM554557</p>
        <a href="https://github.com/victornbm7405" target="_blank" rel="noopener noreferrer">
          Meu GitHub
        </a>
      </div>
    </div>
  );
};

export default Integrantes;

