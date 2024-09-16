import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Integrantes from './pages/Integrantes';
import Contato from './pages/Contato';
import Servicos from './pages/Servicos';
import Enderecos from './pages/Enderecos';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enderecos" element={<Enderecos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/integrantes" element={<Integrantes />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
