/* eslint-disable no-unused-vars */
/**
 * No React, os componentes são formas de armazenar código dentro de um
 * único elemento, que tem funcionalidade e estilo próprios. São 
 * "pedacinhos" que, quando juntados, formam o nosso aplicativo.
 */

// Importante: sempre um componente por arquivo
// Vamos importar o novo componente criado
import React, { Fragment } from 'react';
import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';

/**
 * 
 * Vamos agora ver o conceito de propriedade dentro do React.
 * As propriedades são dados que podemos passar para um componente funcionar
 * de modo diferente. O comportamento do componente muda de acordo com a informacão 
 * que passamos para ele. 
 */

/**
 * Toda vez que vamos mostrar um elemento na tela, precisa ser renderizado.
 * Quando queremos mostrar mais de um elemento, devemos usar uma <div> para armazenar
 * esses elementos, senão causa erro.
 * Mas usar <div> toda hora não é legal. Nesse caso, podemos usar o React.Fragment para
 * colocar nossos elementos, porque trata-se de um marcador vazio que não vai
 * criar divs no arquivo html.
 */

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <RepositoryList/>
        <Counter/>
      </React.Fragment>
    </div>
  );
}

export default App;
