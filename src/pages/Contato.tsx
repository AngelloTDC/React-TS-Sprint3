import React, { useState } from 'react';
import './Contato.css';

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage('Sua mensagem foi enviada com sucesso!');
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
  };

  return (
    <div className="contato-container">
      <h1>Fale com a gente!</h1>
      <form className="contato-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome Completo</label>
          <input 
            type="text" 
            id="nome" 
            name="nome" 
            value={formData.nome} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Número de Telefone</label>
          <input 
            type="tel" 
            id="telefone" 
            name="telefone" 
            value={formData.telefone} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensagem">Motivo do Contato</label>
          <textarea 
            id="mensagem" 
            name="mensagem" 
            value={formData.mensagem} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit" className="submit-button">Enviar</button>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default Contato;
