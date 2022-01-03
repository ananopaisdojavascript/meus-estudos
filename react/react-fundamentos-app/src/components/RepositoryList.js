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

import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: "Nome do Repositório",
    description: "Descrição",
    link: "https://github.com"
}

// Vamos passar os dados desse objeto da seguinte forma:

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}