/*
  01
  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
    tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada
    e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da 
    resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que 
    a operação foi completada), exiba no console a mensagem 'Não foi possível 
    obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/

const request = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    // console.log(request, request.responseText)
  } else {
    //console.log('Não foi possível obter os dados do pokémon')
  }
});
request.open("GET", "https://pokeapi.co/api/v2/pokemon/pikachu");
request.send();
// console.log(request)

/*
  02
  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar: 
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/

/*
  03
  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/

/*
  04
  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a 
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
    método 4x, com diferentes metragens passadas por parâmetro.
*/

/*
  05
  - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:
  
  'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, 
  peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS 
  metros.'
  
  - Antes de retornar a string, faça as seguintes validações:
    - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
      por "a";
    - Se a idade for 1, substitua "anos" por "ano", no singular;
    - Se a quantidade de metros caminhados for 1, substitua "metros" por 
      "metro", no singular.
*/

const myPersonalInfo = {
	"firstName": "Ana Paula",
  "lastName": "Lopes Araujo",
  "gender": "female",
  "age": 44,
  "height": 1.78,
  "weight": 100,
  "amIWalking": true,
  "metersWalked": 0,
}

myPersonalInfo.addYear = function(){
  return this.age++
}

for(let i = 0; i < 5; i++) {
  console.log(myPersonalInfo.addYear())
}

myPersonalInfo.addMeters = function(meter) {
  	myPersonalInfo.metersWalked += meter;
    myPersonalInfo.walk = true;
}

const meters = [5, 10, 15, 20]

for(let i = 0; i < meters.length; i++) {
  console.log(meters[i])
}

const getGender = (gender, female, male) => {
	return gender === "female" ? female : male
}

const getAge = (age, year, years) => {
	return year === 1 ? year : years
}

const getMeters = (quantity, meter, meters) => {
	return quantity === 1 ? meter : meters
}

myPersonalInfo.getInfo = function() {
    let maleOrFemale = getGender(this.gender, "a", "o")
    let yearOrYears = getAge(this.age, "ano", "anos")
    let meterOrMeters = getMeters(this.addMeters(7), "metro", "metros")
  	return `Oi. Eu sou ${maleOrFemale} ${this.firstName}, tenho ${this.age} ${yearOrYears}, 
    ${this.height} metros de altura, peso ${this.weight} quilos e, 
    só hoje, eu já caminhei ${this.metersWalked} ${meterOrMeters}.`
  }

console.log(myPersonalInfo.getInfo())

/*
  06
  - Crie uma função que recebe um valor como argumento e retorna um boolean 
    indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
    valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/

const truthyOrFalsy = (value) => {
  return Boolean(value);
};

// console.log(truthyOrFalsy(1));
// console.log(truthyOrFalsy("oi"));
// console.log(truthyOrFalsy(200));
// console.log(truthyOrFalsy(true));
// console.log(truthyOrFalsy("typeof"));
// console.log(truthyOrFalsy(1000));
// console.log(truthyOrFalsy(`Oi`));

/*
  07
  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por 
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
    os livros.
  Dica: propriedades de objetos podem ser declaradas como strings.
*/

const getBook = bookName => {
  const books = {
    "Crepúsculo": {
      pages: 500,
      author: "Stephanie Meyer",
      publisher: "Intrínseca"
    },
    "Lua Nova": {
      pages: 600,
      author: "Stephanie Meyer",
      publisher: "Intrínseca"
    },
    "Amanhecer": {
      pages: 400,
      author: "Stephanie Meyer",
      publisher: "Intrínseca"
    }
  }

  return books[bookName] || books;
}

console.log(getBook('Lua Nova'))