/*
  01
  - Utilizando a fetch API, implemente uma função assíncrona que busca dados do 
    seu perfil de usuário no GitHub, através do seguinte endpoint:
    - https://api.github.com/users/SEU_NOME_DE_USUARIO_NO_GITHUB
  - Implemente uma segunda função que exibe, no console, seus dados de usuário 
    do GitHub.
*/

fetch("https://api.github.com/users/aplaraujo")
.then(response => {
	console.log(response)
  return response.json()
})
.then(user => console.log(user))
.catch(error => console.log(error))

/*
  02
  - A partir do array numbers (abaixo), crie um novo array que contém somente 
    os números do array numbers que são divisíveis por 2 ou 3;
  - Exiba esse novo array no console.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const isThisNumberDivisibleBy2Or3 = numbers.filter(number => {
	return number % 2 === 0 || number % 3 === 0
})

console.log(isThisNumberDivisibleBy2Or3);

/*
  03
  - Declare um array no qual cada item desse array seja uma sílaba do seu nome.
  - A partir desse array, gere o seu nome usando a "língua do 'P'";
  - A língua do "P" é uma brincadeira onde você coloca a letra "P" antes de 
    cada sílaba de uma palavra falada, como se você estivesse falando em 
    código;
  - Exemplos de nomes na "língua do 'P'":
    - Roger => "PRoPger";
    - Natália => "PNaPtáPlia";
    - Rafaela => "PRaPfaPePla".
*/

// Usar uma expressão regular para separar sílabas:
// 1) Zero o mais consoantes: [^aeiouy]*
// 2) Uma ou mais vogais: [aeiouy]+
// 3) Zero ou uma das verificações a seguir:
// Consoantes, seguidas do final da palavra: [^aeiouy]*$
// Uma consoantes (se seguida por outra consoante): [^aeiouy](?=[^aeiouy])

const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;

const syllabify = (words) => words.match(syllableRegex);

const newArr = syllabify("Paula");

const pLanguage = [];

for(let i = 0; i < newArr.length; i++) {
	let p = `P${newArr[i]}`
  pLanguage.push(p);
}

const joinPWord = pLanguage.join("");

console.log(newArr);
console.log(pLanguage);
console.log(joinPWord);

/*
  04
  - Declare uma constante que receba seu primeiro nome;
  - Exiba no console todas as letras do seu nome separadas, com a seguinte
    mensagem: '"LETRA" é a POSIÇÃOª letra do meu nome.';
  - Por exemplo, se o nome é "Roger", as mensagens exibidas no console devem 
    ser:
      - "R" é a 1ª letra do meu nome;
      - "o" é a 2ª letra do meu nome;
      - E assim por diante, até a última letra.
  Dica: pesquise pelo método split.
*/

const name = "Ana";
let splitName = name.split("");
console.log(splitName);
const newArrName = [];

for(let i = 0; i < splitName.length; i++) {
	newArrName.push(splitName[i])
}

console.log(newArrName)

for(let i = 0; i < newArrName.length; i++) {
	console.log(`${newArrName[i]} é a ${i+1}ª letra do meu nome.`)
}

/*
  05
  - Crie um objeto com as seguintes propriedades e tipos de valores:
    - name: String
    - lastname: String
    - age: Number
  - Exiba no console, em um array, todas as propriedades do objeto acima;
  - Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  Dica: pesquise pelo método Object.keys().
*/

const info = {
	"firstName": "Ana Paula",
  "lastName": "Lopes Araujo",
  "age": 44
}

console.log(Object.keys(info))

/*
  06
  - Implemente uma função que retorna as ocorrências de um determinado valor em 
    um array;
  - A função deve receber um array como 1º argumento e o valor a ser buscado no 
    array como 2º argumento;
  - Exemplo: se na invocação da função o array [1, 2, 3, 1] é passado como 1º 
    argumento e o número 1 é passado como 2º argumento, a função deve retornar 
    2, pois há duas ocorrências do número 1 no array;
  - Utilize o array abaixo para testar a função.
*/

const countOccurrences = (array, value) => {
	// Usar o método reduce
  return array.reduce((arr, val) => val === value ? arr + 1 : arr, 0)
}

const scores = [100, 90, 85, 100, 60, 85, 100, 90, 55, 75, 60]

console.log(countOccurrences(scores, 60))

/*
  07
  - Já implementamos o método some e o método map, do zero;
  - Neste exercício, seu desafio será criar o método filter, do zero;
  - Implemente uma função "filter" que possui a mesma funcionalidade do método  
    filter original;
  - Você não poderá utilizar o método filter original, embutido na linguagem;
  - A assinatura e retorno da invocação desta função devem ser os seguintes:
    - filter([1, 2, 3], item => item) // [1, 2, 3];
    - filter([0, 1, 2], item => item) // [1, 2];
    - filter([1, 2, 3], item => item < 2) // [1];
    - filter([1, 2, 3, 5], (item, index) => item === index + 1) // [1, 2, 3];
    - filter([1, 2, 3, 2, 1, 5], (item, index, array) =>
        index === array.indexOf(item)) // [1, 2, 3, 5];
  - Utilize os casos acima para testar sua função;
  - Se você não se lembra como o método filter funciona, há 2 opções:
    1) Reassistir à aula "O método filter" - Aula 01-03 da etapa 08;
    2) Pesquisar no MDN.
  
  Dica: lembre-se que o método filter inclui o item em questão no novo array 
  que está sendo gerado **apenas** se a função retorna um valor truthy.
*/

const filter = (arr, fn) => {
	const filtered = [];
  arr.forEach((item, index, arr) => {
  	if(fn(item, index, arr)) filtered.push(item)
  })
  return filtered;
}

const arr1 = [1, 2, 3];
const func1 = item => item;

console.log(filter(arr1, func1))

const arr2 = [0, 1, 2];
const func2 = item => item;

console.log(filter(arr2, func2));

const arr3 = [1, 2, 3];
const func3 = item => item < 2;

console.log(filter(arr3, func3));

const arr4 = [1, 2, 3, 5];
const func4 = (item, index) => {
	return item === index + 1
};

console.log(filter(arr4, func4));

const arr5 = [1, 2, 3, 2, 1, 5];
const func5 = (item, index, array) =>
        index === array.indexOf(item);
        
console.log(filter(arr5, func5));