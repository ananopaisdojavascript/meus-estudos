/*
  01
  - Implemente um código assíncrono entre os console.log() abaixo.
*/

// console.log("Linha 1");
// console.log("Linha 2");
// console.log("Linha 3");
// console.log("Linha 4");

// setTimeout(() => {
//   console.log("Esse código só será executado após a sequência de console.log");
// }, 5000);

// console.log("Linha 5");
// console.log("Linha 6");
// console.log("Linha 7");
// console.log("Linha 8");

/*
  02
  - Descomente o código abaixo e crie a função que fará a string dentro da 
    "logGreeting" ser exibida no console.
*/

function logGreeting(name) {
  console.log(`olá, ${name}`);
}

// Função de callback: função passada como argumento para outra função
const x = (callback) => {
  return callback("Ana");
};

x(logGreeting);

/*
  03
  - O código abaixo possui uma parte que pode ser isolada. Isole-a.
*/

const numbers = [3, 4, 10, 20];
const num = (num) => num < 5;
const lesserThanFive = numbers.filter(num);

console.log(lesserThanFive);

/*
  04
  - Refatore o código abaixo.
*/

const prices = [12, 19, 7, 209];
const getTotalPrice = (acc, price) => acc + price;
const totalPrice = prices.reduce(getTotalPrice, 0);

console.log(`Preço total: ${totalPrice}`);

/*
  05
  - Abaixo da declaração do objeto "car", modifique a cor do carro para 'azul';
  - Não insira `car.color = azul`.
*/

let car = { color: "amarelo" };

Object.keys(car).forEach((key) => {
  car[key] = "azul";
});

console.log(car);

/*
  06
  - Crie uma função que recebe 3 argumentos;
  - Se um dos 3 argumentos não for passado na invocação, a string 'A função 
    deve ser invocada com 3 argumentos' deve ser retornada;
  - Se todos os argumentos forem passados, retorne a string 'A função foi 
    invocada com 3 argumentos'.
*/

const allArguments = (a, b, c) => {
  const verifyArguments = [a, b, c].includes(undefined);
  return verifyArguments
    ? "A função deve ser invocada com 3 argumentos"
    : "A função foi invocada com 3 argumentos";
};

console.log(allArguments(1, 2, 3));

/*
  07
  - O objeto abaixo representa uma caixa de livros com espaço para 5 livros e 
    que, no momento em que foi declarado, possui nenhum livro dentro;
  - Crie um método que irá adicionar livros na caixa;
  
  Este método deve:
    - Receber por parâmetro o número de livros que serão colocados na caixa. 
      Esse número não precisa encher a caixa de uma só vez, os livros podem 
      ser acrescentados aos poucos;
    - Retornar a frase: "Já há 'X' livros na caixa";
    - Se a caixa já estiver cheia, com todos os espaços já preenchidos, o 
      método deve retornar a frase: "A caixa já está cheia";
    - Se ainda houverem espaços na caixa mas a quantidade de livros passada por
      parâmetro for ultrapassar o limite de espaços da caixa, mostre quantos 
      espaços ainda podem ser ocupados, com a frase: "Só cabem mais 
      QUANTIDADE_DE_LIVROS_QUE_CABEM livros";
    - Se couber somente mais um livro, mostre a palavra "livro" (no singular) 
      na frase acima.
*/

let booksBox = {
  spaces: 5,
  booksIn: 0,
};

const getSingularOrPlural = (quantity, singular, plural) => {
  return quantity === 1 ? singular : plural;
};

const getAvailableSpaces = (spaces, booksIn) => {
  const availableSpaces = spaces - booksIn;
  const singularOrPlural = getSingularOrPlural(
    availableSpaces,
    "livro",
    "livros"
  );
  const singularOrPluralTwo = getSingularOrPlural(
    availableSpaces,
    "cabe",
    "cabem"
  );

  return `Só ${singularOrPluralTwo} mais ${availableSpaces} ${singularOrPlural}`;
};

// Criar o método para colocar os livros na caixa
// Colocar no método o parâmetro para indicar a quantidade de livros armazenados na caixa
booksBox.addBooks = function (bookQuantity) {
  let { spaces } = booksBox;
  const isTheBoxFilled = this.booksIn === spaces;
  const hasTheBoxSpaces = this.booksIn + bookQuantity > spaces;
  // Condição para verificar se todos os espaços da caixa não estiverem ainda preenchidos
  if (isTheBoxFilled) {
    return "A caixa já está cheia";
  }
  // Verificar se os espaços na caixa já estão ocupados

  if (hasTheBoxSpaces) {
    return getAvailableSpaces(spaces, this.booksIn)
  }
  // Acrescentar os livros na caixa
  this.booksIn += bookQuantity;
  const booksSingularOrPlural = this.booksIn === 1 ? "livro" : "livros";
  return `Ja há ${this.booksIn} ${booksSingularOrPlural} na caixa`;
};

console.log(booksBox.addBooks(1));
console.log(booksBox.addBooks(6))
console.log(booksBox);
