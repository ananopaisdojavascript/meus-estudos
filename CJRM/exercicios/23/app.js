/*
  01
  - Exiba no console apenas as letras que a "myString" contém;
  - Não modifique a string manualmente.
*/

const myString = '    JS      '
console.log(myString.trim())
/*
  02
  - Baseado no score dos objetos, ordene o array "people" de forma crescente 
    (menores no topo, maiores em baixo);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const people = [
  { firstName: 'Estevão', lastName: 'Rodriguez', score: 90 },
  { firstName: 'José', lastName: 'Antônio', score: 100 },
  { firstName: 'Felipe', lastName: 'Tavares', score: 71 },
  { firstName: 'Eric', lastName: 'Silva', score: 82 }
]

const orderedPeople = people.map(({ firstName, lastName, score }) => ({ firstName, lastName, score }))
.sort((a, b) => a.score - b.score)
console.log(people)
console.log(orderedPeople)

/*
  03
  - Gere um novo array com apenas os animais que contém 3 letras no nome;
  Ps: Neste e nos demais exercícios, utilize o debugger para visualizar o valor 
      final que os exercícios pedem. Após resolver um exercício, remova o 
      debugger antes de partir para o próximo.
*/

const animals = ['cão', 'gato', 'boi', 'leão', 'gnu', 'alce', 'ema']
const threeLetterAnimals = animals.map(animal => animal).filter(animal => animal.length === 3)

console.log(animals)
console.log(threeLetterAnimals)

/*
  04
  - Baseado no array "animals", gere um novo array com a quantidade de letras do 
    nome de cada animal. Ex.: [6, 8, 2].
*/

const animalsLength = animals.map(animal => animal.length)
console.log(animalsLength)

/*
  05
  - Através do encadeamento de 2 métodos, gere um novo array com apenas os nomes  
    dos amigos que moram perto (que contém a propriedade "nearMe" armazenando 
    true).
*/

const friends = [
  { id: 1, name: 'João', nearMe: true },
  { id: 2, name: 'Matheus', nearMe: true },
  { id: 3, name: 'Luana', nearMe: false },
  { id: 4, name: 'Nilson', nearMe: true },
  { id: 5, name: 'Solange', nearMe: false }
]

const friendsNearMe = friends.filter(({nearMe}) => nearMe === true).map(friend => friend.name)


/*
  06
  - Através do encadeamento de 2 métodos, obtenha a soma só dos números ímpares 
    do array abaixo.
*/

const numbers = [46, 86, 212, 29, 51, 9, 25, 42, 81]

const sumOfOddNumbers = numbers.filter(number => number % 2 === 1)
.reduce((accumulator, item) => accumulator + item, 0)



/*
  07
  - Através do encadeamento de 2 métodos, obtenha a soma da população de todos  
    países, exceto a China.
*/

const data = [{
  country: 'China',
  population: 1409517397
}, {
  country: 'India',
  population: 1339180127
}, {
  country: 'USA',
  population: 324459463
}, {
  country: 'Indonesia',
  population: 263991379
}]

const newCountryArray = data.filter(item => item.country !== "China")
.reduce((acc, item) => acc + item.population, 0)

console.log(newCountryArray)