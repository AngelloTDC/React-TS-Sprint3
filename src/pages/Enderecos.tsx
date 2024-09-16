import React, { useState } from 'react';
import styles from '../styles/Enderecos.module.css';

const enderecosData = [
  { id: 1, title: 'Unidade Paulista', description: 'Edifício Paulista - Av. Paulista, 1106 - 7º andar' },
  { id: 2, title: 'Unidade Aclimação', description: 'Av. Lins de Vasconcelos, 1222 - Aclimação' },
  { id: 3, title: 'Unidade Campos Elíseos', description: 'Alameda Barão de Piracicaba, 618 - Campos Elíseos' },
  { id: 4, title: 'Unidade Campos Elíseos 2', description: 'R. Guaianazes, 1238 - Campos Elíseos' },
];

const Enderecos: React.FC = () => {
  const [activeEndereco, setActiveEndereco] = useState<number | null>(null);

  const toggleEndereco = (id: number) => {
    setActiveEndereco(activeEndereco === id ? null : id);
  };

  return (
    <div className={styles.enderecosContainer}>
      <h1>Nossos Endereços!</h1>
      <div className={styles.enderecosColumn}>
        {enderecosData.map((endereco) => (
          <div 
            key={endereco.id} 
            className={`${styles.enderecoBox} ${activeEndereco === endereco.id ? styles.enderecoBoxActive : ''}`} 
            onClick={() => toggleEndereco(endereco.id)}
          >
            <h3>{endereco.title}</h3>
            {activeEndereco === endereco.id && <p>{endereco.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enderecos;
