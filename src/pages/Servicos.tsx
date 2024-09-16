import React, { useState } from 'react';
import './Servicos.css';

const servicesData = [
  { id: 1, title: 'Troca de Óleo', description: 'Manutenção regular do motor do seu veículo. A troca de óleo garante que seu motor funcione de maneira suave e eficiente, prolongando sua vida útil.' },
  { id: 2, title: 'Alinhamento e Balanceamento', description: 'O alinhamento e balanceamento das rodas garantem que seu carro tenha um desempenho estável e que os pneus se desgastem de maneira uniforme. Isso também melhora a segurança durante a condução.' },
  { id: 3, title: 'Verificação de Freios', description: 'Um serviço essencial para sua segurança. Verificamos pastilhas, discos e fluido de freio para garantir que seu sistema de frenagem esteja sempre em perfeito estado.' },
  { id: 4, title: 'Substituição de Pneus', description: 'Oferecemos pneus de alta qualidade para todas as marcas e modelos de veículos. Nossos especialistas garantem que a instalação seja feita corretamente, aumentando a segurança na estrada.' },
  { id: 5, title: 'Inspeção de Ar Condicionado', description: 'Mantenha o clima do seu carro agradável. Realizamos uma inspeção completa do sistema de ar condicionado, identificando vazamentos e garantindo que tudo funcione perfeitamente.' },
  { id: 6, title: 'Troca de Filtros', description: 'A troca regular dos filtros de ar, óleo e combustível ajuda a manter seu carro limpo e eficiente. Evite problemas futuros com nosso serviço de troca de filtros.' },
  { id: 7, title: 'Diagnóstico Eletrônico', description: 'Usamos tecnologia de ponta para diagnosticar problemas eletrônicos em seu veículo. Identificamos falhas rapidamente, economizando tempo e dinheiro em reparos.' },
  { id: 8, title: 'Lavagem e Polimento', description: 'Deixe seu carro brilhando! Oferecemos serviços de lavagem e polimento, removendo sujeira e riscos, deixando a pintura do seu carro como nova.' }
];

const Servicos: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const toggleService = (id: number) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <div className="servicos-container">
      <h1>Alugns dos nossos Serviços!</h1>
      <div className="servicos-grid">
        {servicesData.map((service) => (
          <div 
            key={service.id} 
            className={`servico-box ${activeService === service.id ? 'active' : ''}`} 
            onClick={() => toggleService(service.id)}
          >
            <h3>{service.title}</h3>
            {activeService === service.id && <p>{service.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicos;
