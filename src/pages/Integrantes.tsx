import React from 'react';
import styles from '../styles/Integrantes.module.css';
import integrante1 from '../assets/integrante1.png';
import integrante2 from '../assets/integrante2.jpg';
import integrante3 from '../assets/integrante3.jpg';

const Integrantes: React.FC = () => {
  return (
    <div className={styles.integrantesContainer}>
      <div className={styles.integrante}>
        <img src={integrante1} alt="Integrante 1" className={styles.integranteImage} />
        <p className={styles.integranteText}>Angello Turano da Costa</p>
        <p className={styles.integranteText}>RM556511</p>
        <a href="https://github.com/AngelloTDC" target="_blank" rel="noopener noreferrer" className={styles.integranteLink}>
          Meu GitHub
        </a>
      </div>
      <div className={styles.integrante}>
        <img src={integrante2} alt="Integrante 2" className={styles.integranteImage} />
        <p className={styles.integranteText}>Leonardo Kawachi</p>
        <p className={styles.integranteText}>RM558166</p>
        <a href="https://github.com/IHateMyTiming" target="_blank" rel="noopener noreferrer" className={styles.integranteLink}>
          Meu GitHub
        </a>
      </div>
      <div className={styles.integrante}>
        <img src={integrante3} alt="Integrante 3" className={styles.integranteImage} />
        <p className={styles.integranteText}>Victor Nieves Britto Medeiros</p>
        <p className={styles.integranteText}>RM554557</p>
        <a href="https://github.com/victornbm7405" target="_blank" rel="noopener noreferrer" className={styles.integranteLink}>
          Meu GitHub
        </a>
      </div>
    </div>
  );
};

export default Integrantes;


