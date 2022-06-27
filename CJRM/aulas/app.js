// strings
// console.log('Oi gente!')

// const email = 'laracroft@email.com'

// console.log(email)

// concatenação de strings
const firstName = 'Lara'
const lastName = 'Croft'
const fullName = firstName + ' ' + lastName

// console.log(fullName)

// acessando caracteres
// console.log(fullName[0])

// comprimento de uma string
// console.log(fullName.length)

// métodos de string
// console.log(fullName.toUpperCase())
const result = fullName.toLowerCase()
// console.log(result)

// const index = email.indexOf('@') 

// métodos comuns de strings

// const lastIndexOfA = email.lastIndexOf('a')
// console.log(lastIndexOfA)

// const emailSlice = email.slice(0, 9)

// const emailReplace = email.replace('l', 'y')

// console.log(emailReplace)

// inteiros e decimais
const radius = 10
const pi = 3.14


// operadores aritméticos
const area = pi * radius ** 2

// ordem de operações
const crazyOperation = 5 * (10 - 3) ** 2

// operadores de incremento e decremento
// let postLikes = 10
// console.log(postLikes++)
// console.log(postLikes--)

// operadores adição, subtração, multiplicação e divisão - assignment
// postLikes += 20
// postLikes -= 5
// postLikes *= 20
// postLikes /= 2

// NaN - not a number

// console.log(7 / 'oi')

// concatenção de string com número
// console.log('Esse post tem ' + postLikes + ' likes.')

const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Mateus Saad'
const postComments = 15

// usando concatenação
// const postMessage = 'O post "' + postTitle + '", de ' + postAuthor + ', tem ' + postComments + ' comentários'

// console.log(postMessage)

// console.log('Você já viu o filme "As Branquelas"?')
// console.log("Você já viu o filme 'As Branquelas?'")
// console.log('Você já viu o filme \'As Branquelas\'?')

// usando template strings
const postMessage = `O post "${postTitle}", de ${postAuthor}, tem ${postComments} comentários.`

// criando templates HTML
const html = `
    <h2>${postTitle}</h2>
    <p>Autor: ${postAuthor}</p>
    <span>Esse post tem ${postComments} comentários.</span>
`
// console.log(html)

// arrays ou vetores

let heroes = ['Batman', 'Catwoman', 'Iron Man']
// console.log(heroes[0])

heroes[2] = 'Spider-Man'

const ages = [31, 25, 39, 40, 25]
// console.log(ages[2])

// métodos de arrays

// console.log(heroes.length)
const joinHeroes = heroes.join(' , ')
// console.log(joinHeroes)

const indexOf25 = ages.indexOf(25)
// console.log(indexOf25)

const heroesConcat = heroes.concat(['Superman', 'Woverine'])
// console.log(heroesConcat)

const pushToHeroes = heroes.push('Cyclops', 'Hulk')
// console.log(pushToHeroes)

const popHeroes = heroes.pop()
// console.log(popHeroes)

// null e undefined

// let emptiness;
// console.log(emptiness, emptiness + 3, `O valor é ${emptiness}`)

let emptiness = null
// console.log(emptiness, emptiness + 3, `O valor é ${emptiness}`)

// booleanos e comparações

// console.log(true, false)

// métodos podem retornar booleanos

// const email = 'brucewayne@email.com.br'
// const includes = email.includes('@')
// console.log(includes)
// const names = ['dio', 'roger', 'robert']
// const arrayIncludes = names.includes('robert')
// console.log(arrayIncludes)

// operadores de comparação

// const age = 31

// console.log(age == 31)
// console.log(age == 35)
// console.log(age != 35)
// console.log(age != 31)
// console.log(age > 30)
// console.log(age > 31)
// console.log(age < 31)
// console.log(age <= 31)
// console.log(age >= 31)

// const name = 'roger'
// console.log(name == 'roger')
// console.log(name == 'Roger')

// exatamente igual a e exatamente diferente de

// console.log(age == 31)
// console.log(age == '31')

// console.log(age === 31)
// console.log(age === '31')

// console.log(age !== 31)
// console.log(age !== '31')

// conversão de tipos

// let score = '100'
// score = Number(score)
// console.log(score + 1)

// console.log(typeof score)

// const crazyConversion = Number('Maçã')
// console.log(crazyConversion)

// const convertedNumber = String(97)
// console.log(convertedNumber)

// const booleanConversion = Boolean(10)
// console.log(booleanConversion)

// console.log(Boolean(0))

// for loop

// for(let i = 0; i < 5; i++) {
//     console.log(`Dentro do loop: ${i }`)
// }

// const namesArray = ['Linus', 'Ada', 'Bill']

// for(let i = 0; i < namesArray.length; 1++) {
//     const HTMLTemplate = `<p>${namesArray[i]}</p>`
//     console.log(HTMLTemplate)
// }

// while loop

// let i = 0

// while(i < 5) {
//     // console.log(`Dentro do loop: ${i }`)
//     i++
// }

// if, else if e if else

// const idade = 18

// if (idade > 18) {
//     // console.log('Você tem mais de 18 anos')
// }

// const simpsons = ['Marge', 'Homer', 'Lisa', 'Bart']

// if (simpsons.length >= 3) {
//     // console.log('Esse vetor tem vários personagens')
// }

// const senha = 'oi123'

// if (senha.length >= 8) {
//     console.log('Essa senha tem 8 ou mais caracteres')
// } else {
//     console.log('Essa senha precisa ter 8 ou mais caracteres')
// }

// if (senha.length >= 12) {
//     console.log('Essa senha é muito forte')
// } else if (senha.length >= 8) {
//     console.log('Essa senha tem 8 ou mais caracteres')
// } else {
//     console.log('Essa senha precisa ter 8 ou mais caracteres')
// }

// if (senha.length >= 12 && senha.includes('1')) {
//     console.log('Essa senha é muito forte')
// } else if (senha.length >= 8 || senha.includes('1')) {
//     console.log('Essa senha tem 8 ou mais caracteres')
// } else {
//     console.log('Essa senha precisa ter 8 ou mais caracteres')
// }

// Function declaration
function sayHi() {
    console.log("Oi")
}

// sayHi()

// Function expression

const showFood = function() {
    console.log("pizza")
}

// showFood( )

// Argumentos, parâmetros e default parameters (parâmetros padrão)

const myFunc = function(name = 'Antonio', lastName = 'Almeida') {
    console.log(`Oi ${name} ${lastName}!`)
}

// myFunc()

// return

const double = function(number) {
    return number * 2
}

// console.log(double(4))

// Função de callback

/*
    Criar duas funções: uma que verifique quais números
    são ímpares e outra que verifique os números pares
*/

const isThisNumberOdd = (number) => number % 2 === 1
const isThisNumberEven = (number) => number % 2 === 0

/*
    Atualizar a nossa função de filtragem de números
    ímpares com mais um parâmetro
*/

const filter = (numbers, callback) => {
    // Criar um vetor para colocar os números ímpares ou pares
    const results = []
    // Criar um laço para percorrer os números e 
    // colocar os valores ímpares ou pares no novo vetor
    for (let i = 0; i < numbers.length; i++) {
        const value = numbers[i]
        /**
         * Chamada do parâmetro 'callback' que refere-se
         * à função 'isThisNumberOdd' ou 'isThisNumberEven' declaradas
         * anteriormente. O parâmetro da função 'callback'
         * será a constante 'value' cujos valores são
         * os números percorridos no vetor.
         */
        if (callback(value)) {
            results.push(value)
        }
    }
    // Retornar o vetor com os números ímpares ou pares
    return results
}

// Criar um vetor com números aleatórios
const numbers = [53, 41, 85, 25, 94, 70, 16, 59, 65, 6, 43, 47, 100, 79, 3, 33, 93, 90, 56, 13]
/**
 * Chamar a função 'filter' com dois argumentos:
 * O primeiro argumento é o vetor de números que criamos ('numbers')
 * O segundo argumento é a função que verifica se os números
 * do vetor 'numbers' são ímpares ('isThisNumberOdd') ou pares ('isThisNumberEven').
 */
// console.log(filter(numbers, isThisNumberOdd)) // isThisNumberOdd é a função de callback
// console.log(filter(numbers, isThisNumberEven)) // isThisNumberEven também é a função de callback

// forEach

/**
 * Vamos usar o mesmo vetor criado para as funções de callback
 */

// Laço for regular

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// Laço forEach

/*
Dentro do método há uma função com um determinado
parâmetro (number) que será aplicada a todos os valores do vetor 'numbers'
*/
// numbers.forEach(number => console.log(number))

// Uso de callbacks

// const ul = document.querySelector('[data-js="ul"]')

// const socialNetworks = ['YouTube', 'Instagram', 'Twitter']

// let template = ''

// socialNetworks.forEach(element => {
//     template += `<li>${element}</li>`
// })

// ul.innerHTML = template

// const paragraphs = document.querySelectorAll('p')

// const content = document.querySelector('.content')

// const people = ['Ana', 'Jennie', 'Irene', 'Tiffany']

// people.forEach(person => {
//     content.innerHTML += `
//         <li>${person}</li>
//     `
// })

const link = document.querySelector('a')
// console.log(link.getAttribute('href'))

const article = document.querySelector('article')

const children = Array.from(article.children)

children.forEach(child => {
    child.classList.add("pomegranate")
})

const h2 = document.querySelector('h2')

console.log(h2.parentElement)