import { React, useState, useEffect } from 'react';
/**
 * Podemos fazer a passagem do HTML para Javascript por meio da 
 * interpolacão. Vamos criar uma variável e chamá-la no nosso
 * componente entre chaves simples
 */

/**
 * Um componente pode ser repetido diversas vezes
 */

/**
 * Na propriedade, podemos passar um dado de um componente pai
 * para um componente filho. Podemos passar dados do componente
 * "Repository List" para o componente "Repository Item"
 */

/**
 * Podemos ver que uma mesma propriedade pode ter vários tipos de dados.
 * Nesse caso, podemos criar objetos com os dados desejados.
 */

// Vamos passar os dados desse objeto da seguinte forma:

export function RepositoryList() {

    // Criar um estado para armazenar a lista de repositórios
    const [posts, setPosts] = useState([])

    // useEffect: serve para disparar uma função quando algo acontecer
    // no aplicativo (se a variável mudou, por exemplo),
    // quero avisar a API que houve mudança na variável
    // O useEffect sempre recebe dois parâmetros:
    // a função que queremos executar
    // a função que será executada quando a variável mudar
    // Caso não haja um segundo parâmetro, a função principal
    // será executada apenas uma vez
    // O useEffect nunca pode ficar sem o segundo parâmetro,
    // do contrário entra em um "loop" infinito
    // Quando queremos chamar uma API externa, vamos usar
    // fetch(). Quando o fetch() devolver uma resposta,
    // essa resposta será convertida para json 
    // e quando terminar o processo de conversão da resposta
    // para json, vamos obter os dados do repositório

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
    }, [posts]);

    // Toda vez que temos um dado armazenado no vetor,
    // vamos fazer o seguinte:
    // vamos incluir chaves, porque se trata de um código JS,
    // vamos percorrer o vetor de repositórios,
    // e, para cada um dos respositórios, queremos retornar
    // algum dado que será exibido na tela.
    // Então vamos usar map() para percorrer todos os
    // repositórios e retornar algum dado.

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {posts.map(post => {
                    return <div>
                        <ul>
                            <li key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </li>
                        </ul>
                    </div>
                })}
                
            </ul>
        </section>
    )
}