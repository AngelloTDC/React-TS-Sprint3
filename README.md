# React + TypeScript + Vite

Este template fornece uma configuração mínima para fazer o React funcionar no Vite com HMR (Hot Module Replacement) e algumas regras do ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) utiliza [Babel](https://babeljs.io/) para Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) utiliza [SWC](https://swc.rs/) para Fast Refresh.

## Expandindo a configuração do ESLint

Se você estiver desenvolvendo uma aplicação para produção, recomendamos atualizar a configuração para habilitar regras de linting que levam em consideração o tipo:

- Configure a propriedade `parserOptions` de nível superior da seguinte forma:

```js
export default tseslint.config({
  languageOptions: {
    // outras opções...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})

Substitua tseslint.configs.recommended por tseslint.configs.recommendedTypeChecked ou tseslint.configs.strictTypeChecked.
Opcionalmente, adicione ...tseslint.configs.stylisticTypeChecked.
Instale eslint-plugin-react e atualize a configuração:

// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Defina a versão do React
  settings: { react: { version: '18.3' } },
  plugins: {
    // Adicione o plugin do React
    react,
  },
  rules: {
    // outras regras...
    // Habilite as regras recomendadas
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})


### Notas Adicionais

- Você pode adicionar uma seção para **instalação** e **execução**, se desejar, conforme discutido anteriormente.
- Sinta-se à vontade para expandir com mais informações sobre como usar o template, exemplos de uso, ou qualquer outra configuração específica que considere importante.

Esse formato mantém a estrutura clara e organizada, facilitando para os desenvolvedores que utilizarem seu template.
