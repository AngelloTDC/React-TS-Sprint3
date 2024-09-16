import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Porto-AutoHelp</Link>
      </div>
      <ul className="navbar-links">
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
