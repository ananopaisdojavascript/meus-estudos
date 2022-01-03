/**
 * Vamos entender um pouco mais sobre estados no React.
 * E a melhor forma de entendê-lo é criar um componente de contador mesmo.
 * 
 */
import React, { useState } from 'react';

// Hook (gancho): são todas as funções do React que começam com "use"

export function Counter() {

    // O React não monitora as mudanças de valores, ao contrário do Angular.
    // A forma encontrada de monitorar essas mudanças é o uso dos estados.
    // O que são esses estados?!
    // Estados são formas de vigiar os valores dessas variáveis, e, assim que ocorre uma mudança,
    // esse dado modificado / atualizado aparece na tela
    // As atenções se voltam apenas para a variável cujo valor foi atualizado

    const [counter, setCounter] = useState(0)
    // useState: estado (valor) inicial de uma determinada variável;
    // O useState sempre retorna dois valores: o valor inicial (counter)
    // e o valor atualizado (setCounter)

    // Vamos criar uma função para aumentar o valor do nosso contador
    function increment() {
        setCounter(counter + 1);
    }

    // Vamos criar uma função para diminuir o valor do nosso contador
    function decrement() {
        setCounter(counter - 1);
    }

    // E como vamos chamar essas funções?
    // Vamos usar o evento "onClick" e colocar ambas as funções entre chaves

    return (
        <section>
            <h2>{counter}</h2>
            <button onClick={increment}>Aumentar</button>
            <button onClick={decrement} disabled={counter === 0}>Diminuir</button>
        </section>
    );
}