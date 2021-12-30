// Estrutura básica do React
import React from 'react';
import { render } from 'react-dom';
// Importar o arquivo criado
import { App } from './App';

/**
 * Vamos criar uma função com dois parâmetros:
 * O primeiro parâmetro é o que vai ser mostrado na tela.
 * O segundo parâmetro é o meio de renderizar esse elemento.
 */

render(App, document.getElementById('root'));