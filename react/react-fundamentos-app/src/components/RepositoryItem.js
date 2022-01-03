// Vamos pegar os dados passados no compoente Repository List.
// Como vamos fazer isso? Vamos usar um parâmetro dentro dessa funcão
// chamado "props", no qual todas as propriedades se concentram.

/**
 * Vamos chamar as informações armazenadas no objeto do outro componente.
 * Como vamos fazer isso? Vai ser assim: 
 * props.nome-do-objeto.nome-da-propriedade-do-objeto
 */

export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.link}>Acessar repositório</a>
        </li>
    );
}