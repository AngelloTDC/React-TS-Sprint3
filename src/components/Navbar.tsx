import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link to="/">Porto-AutoHelp</Link>
      </div>
      <ul className={styles.navbarLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>        
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li>
          <Link to="/servicos">Serviços</Link>
        </li>
        <li>
          <Link to="/enderecos">Endereços</Link>
        </li>        
        <li>
          <Link to="/integrantes">Integrantes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;