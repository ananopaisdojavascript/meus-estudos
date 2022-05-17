// strings
console.log('Oi gente!')

// const email = 'laracroft@email.com'

// console.log(email)

// concatenação de strings
const firstName = 'Lara'
const lastName = 'Croft'
const fullName = firstName + ' ' + lastName

console.log(fullName)

// acessando caracteres
console.log(fullName[0])

// comprimento de uma string
console.log(fullName.length)

// métodos de string
console.log(fullName.toUpperCase())
const result = fullName.toLowerCase()
console.log(result)

const index = email.indexOf('@') 

// métodos comuns de strings

const lastIndexOfA = email.lastIndexOf('a')
console.log(lastIndexOfA)

const emailSlice = email.slice(0, 9)

const emailReplace = email.replace('l', 'y')

console.log(emailReplace)

// inteiros e decimais
const radius = 10
const pi = 3.14


// operadores aritméticos
const area = pi * radius ** 2

// ordem de operações
const crazyOperation = 5 * (10 - 3) ** 2

// operadores de incremento e decremento
let postLikes = 10
console.log(postLikes++)
console.log(postLikes--)

// operadores adição, subtração, multiplicação e divisão - assignment
postLikes += 20
postLikes -= 5
postLikes *= 20
postLikes /= 2

// NaN - not a number

console.log(7 / 'oi')

// concatenção de string com número
console.log('Esse post tem ' + postLikes + ' likes.')

const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Mateus Saad'
const postComments = 15

// usando concatenação
// const postMessage = 'O post "' + postTitle + '", de ' + postAuthor + ', tem ' + postComments + ' comentários'

console.log(postMessage)

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
console.log(html)

// arrays ou vetores

let heroes = ['Batman', 'Catwoman', 'Iron Man']
console.log(heroes[0])

heroes[2] = 'Spider-Man'

const ages = [31, 25, 39, 40, 25]
console.log(ages[2])

// métodos de arrays

console.log(heroes.length)
const joinHeroes = heroes.join(' , ')
console.log(joinHeroes)

const indexOf25 = ages.indexOf(25)
console.log(indexOf25)

const heroesConcat = heroes.concat(['Superman', 'Woverine'])
console.log(heroesConcat)

const pushToHeroes = heroes.push('Cyclops', 'Hulk')
console.log(pushToHeroes)

const popHeroes = heroes.pop()
console.log(popHeroes)

// null e undefined

// let emptiness;
// console.log(emptiness, emptiness + 3, `O valor é ${emptiness}`)

let emptiness = null
console.log(emptiness, emptiness + 3, `O valor é ${emptiness}`)

// booleanos e comparações

console.log(true, false)

// métodos podem retornar booleanos

const email = 'brucewayne@email.com.br'
const includes = email.includes('@')
console.log(includes)
const names = ['dio', 'roger', 'robert']
const arrayIncludes = names.includes('robert')
console.log(arrayIncludes)

// operadores de comparação

const age = 31

console.log(age == 31)
console.log(age == 35)
console.log(age != 35)
console.log(age != 31)
console.log(age > 30)
console.log(age > 31)
console.log(age < 31)
console.log(age <= 31)
console.log(age >= 31)

const name = 'roger'
console.log(name == 'roger')
console.log(name == 'Roger')

// exatamente igual a e exatamente diferente de

console.log(age == 31)
console.log(age == '31')

console.log(age === 31)
console.log(age === '31')

console.log(age !== 31)
console.log(age !== '31')

// conversão de tipos

let score = '100'
score = Number(score)
console.log(score + 1)

console.log(typeof score)

const crazyConversion = Number('Maçã')
console.log(crazyConversion)

const convertedNumber = String(97)
console.log(convertedNumber)

const booleanConversion = Boolean(10)
console.log(booleanConversion)

console.log(Boolean(0))
