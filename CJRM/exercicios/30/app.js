/*
  01
  - Usando promises, faça um request para este endpoint:
    https://jsonplaceholder.typicode.com/users
  - Se o request estiver ok, exiba os objetos no console;
  - Se o request não estiver ok, exiba no console "Não foi possível obter os 
    dados dos usuários."
*/

const getUsers = url => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        const isRequestOK = request.readyState === 4 && request.status === 200;
        const isRequestNotOK = request.readyState === 4;

        if(isRequestOK) {
            const data = JSON.parse(request.responseText);
            resolve(data);
        }

        if(isRequestNotOK) {
            reject("Não foi possível obter os dados dos usuários.")
        }
    })

    request.open("GET", url);
    request.send();
})

getUsers("https://jsonplaceholder.typicode.com/users")
.then(users => console.log(users))
.catch(error => console.log(error))


/*
  02
  - Crie uma função chamada `calculator`, que funcione assim:
    - A função deve receber um parâmetro que dirá qual operação matemática ela
      vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
  - Essa função deve retornar uma segunda função que deve receber dois 
    parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a 
    mensagem: "Resultado da operação: NUMERO_1 OPERADOR NUMERO_2 = RESULTADO."
  - Se o operador não for válido, retorne a mensagem "Operação inválida."
*/

const getOperationMessage = (num1, operator, num2, operation) => {
    return `Resultado da operação: ${num1} ${operator} ${num2} = ${operation}.`
}

const calculator = operator => (num1, num2) => {
    const operations = { 
        "+": getOperationMessage(num1, operator, num2, num1 + num2),
        "-": getOperationMessage(num1, operator, num2, num1 - num2),
        "*": getOperationMessage(num1, operator, num2, num1 * num2),
        "/": getOperationMessage(num1, operator, num2, num1 / num2),
        "%": getOperationMessage(num1, operator, num2, num1 % num2),
    }
    return operations[operator] || "Operação inválida."
}

const sum = calculator("+");
console.log(sum(1, 5))

// Crie 2 arrays, `sul` e `sudeste`, que serão as regiões do Brasil. Cada array deve conter os estados dessa região;

const sul = ["Paraná", "Santa Catarina", "Rio Grande do Sul"];
const sudeste = ["Minas Gerais", "Espírito Santo", "Rio de Janeiro", "São Paulo"]

// Crie uma const chamada `brasil`, que irá receber as duas regiões concatenadas. Mostre o `brasil` no console;

let brasil = sul.concat(sudeste);

console.log(brasil);

// Adicione 3 novos estados da região Norte no início do array e mostre no console. Pesquise pelo método "unshift" no MDN;

brasil.unshift("Amazonas", "Acre", "Pará")

console.log(brasil)

// Remova o primeiro estado do array `brasil` e mostre-o no console;

brasil.shift();

console.log(brasil);

// Crie um novo array chamado `newSul`, que recebe somente os estados do sul, pegando do array `brasil`. Não remova esses itens de `brasil`

const newSul = brasil.slice(1, 4);
console.log(newSul);
console.log(brasil)

// Crie um novo array chamado `nordeste`, que tenha os estados do nordeste;

const nordeste = ["Bahia", "Pernambuco", "Ceará", "Alagoas", "Maranhão", "Piauí", "Paraíba", "Rio Grande do Norte", "Sergipe"]

// Remova de `brasil` os estados do `sudeste`, colocando-os em uma constante chamada `newSudeste`. Pesquise pelo método "splice";

const newSudeste = brasil.splice(5);

console.log(newSudeste);

console.log(brasil);

// Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem ficar no mesmo nível que os estados já existentes, não em um array separado;

brasil = sul.concat(nordeste);

console.log(brasil)

// Percorra o array `brasil` e gere um novo array chamado `newBrasil`. Esse array deve ter cada item como um objeto, com as propriedades:
// - `id`: que será o índice do array `brasil`;
// - `estado`: que será o estado do array `brasil`;

const newBrasil = [];
for(let i = 0; i < brasil.length; i++) {
	newBrasil.push({ id: i, state: brasil[i] })
}

console.log(newBrasil)

// Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada, atribuindo o resultado à uma constante. Se tiver, mostre no console a mensagem "Sim, todos os estados tem mais de 7 letras.". Se não, mostre no console: "Nem todos os estados tem mais de 7 letras.". Pesquise pelo método every.

const hasMoreThanSevenLetters = (state, index, array) => {
	return state.length > 7;
}

const doesThisStateHaveMoreThanSevenLetters = brasil.every(hasMoreThanSevenLetters) ? "Sim, todos os estados tem mais de 7 letras." : "Nem todos os estados tem mais de 7 letras."

console.log(doesThisStateHaveMoreThanSevenLetters);

// Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o resultado à uma constante. Se esse estado existir no array, mostre no console "Ceará está incluído.". Se não, mostre "Ceará não foi incluído =/";

const isCearaIncluded = brasil.includes("Ceará") ? "Ceará está incluído." : "Ceará não foi incluído =/";

console.log(isCearaIncluded);

// - Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada objeto desse array, e adicione a frase abaixo na propriedade `estado`: - "ESTADO pertence ao Brasil.";
// - Atribua o novo array a uma constante;

const newBrasilTwo = newBrasil.map(state => ({
	id: state.id + 1, name: state.state, state: `${state.state} pertence ao Brasil`
}))

console.log(newBrasilTwo);

// Filtre o array criado acima, retornando somente os estados que tiverem ID par. Atribua este novo array à uma constante.

const evenID = newBrasilTwo.filter(state => state.id % 2 === 0);

console.log(evenID)