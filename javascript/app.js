// Contar a quantidade de caracteres

// const alfabeto = "abcdefghijklmnopqrstuvwxyz";
// console.log(alfabeto.length)

// Colocar os caracteres em letras maiúsculas

// const alfabeto = "abcdefghijklmnopqrstuvwxyz";

// console.log(alfabeto.toUpperCase())

// Colocar caracters em letras minúsculas

// const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// console.log(alfabeto.toLowerCase());

// Inverter uma cadeia de caracteres 1

// const alfabeto = "abcdefghijklmnopqrstuvwxyz";

// function reverseString(string) {
//     const splitString = string.split("");
//     const reverseArray = splitString.reverse();
//     const joinArray = reverseArray.join("");
//     return joinArray;
// }

// console.log(reverseString(alfabeto));

// Inverter uma cadeia de caracteres 2

// const alfabeto = "abcdefghijklmnopqrstuvwxyz";

// function reverseStringTwo(string) {
//     return string.split("").reverse().join("");
// }

// console.log(reverseStringTwo(alfabeto));

// Inverter uma cadeia de caracteres 3

// const alfabeto = "abcdefghijklmnopqrstuvwxyz";

// function reverseStringThree(string) {
//     if (string === "") {
//         return "";
//     } else {
//         return reverseStringThree(string.substr(1)) + string.charAt(0);
//     }
// }

// console.log(reverseStringThree(alfabeto))

// Remover espaços em branco no começo e no fim da string

// const alfabeto = "     abcdefghijklmnopqrstuvwxyz     ";

// console.log(alfabeto.trim());

// Retornar um caractere específico dentro da string

// const alfabeto = "abcdefghijklmnopqrstuvwxyz";

// console.log(alfabeto.charAt(0))

// Retornar um caractere ASCII específico dentro da string

// const alfabeto = "abcdefghijklmnopqrstuvwxyz";

// console.log(alfabeto.charCodeAt(0))

// Converter uma cadeia de caracteres em um vetor

// const alfabeto = "abcdefghijklmnopqrstuvwxyz";

// console.log(alfabeto.split(""))

// Converter uma string em um número 1

// const num = "20";

// console.log(parseFloat(num))

// Converter uma string em um número 2

// const num = "20";

// console.log(Number(num))

// Converter um número em string

// const num = 20;

// console.log(num.toString())

// Colocar casas decimais em um número

// const num = 20;

// console.log(num.toFixed(3))

// Converter um número em uma moeda local

// const num = 2000;

// console.log(new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(num))

// Obter o ano atual

// const anoAtual = new Date().getFullYear();

// console.log(anoAtual)

// Obter o quadrado de um número 1

// const num = 25;

// console.log(Math.pow(num, 2))

// Obter o quadrado de um número 2

// const num = 25;

// console.log(num ** 2);

// Obter o quadrado de um número 3

// const num = 25;

// console.log(num * num);