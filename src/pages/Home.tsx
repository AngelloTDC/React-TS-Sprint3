import React from 'react';
import styles from '../styles/Home.module.css';
import imagem from '../assets/foto-site.png';

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeText}>
        <h1>Porto-AutoHelp</h1>
        <p>A AutoHelp é um novo sistema de ajuda para clientes Porto
          com diversos tipos de solução para seu veículo! Em parceria
          com os alunos da FIAP, desenvolvemos um método de ajudar na 
          experiência de nossos clientes para ter o melhor atendimento
          possível com algo que antes era tão burocrático!
        </p>
      </div>
      <div className={styles.homeImage}>
        <img src={imagem} alt="Imagem Descrição" />
      </div>
    </div>
  );
};

export default Home;

