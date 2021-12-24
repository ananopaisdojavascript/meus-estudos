// Inverter uma cadeia de caracteres 2

const alfabeto = "abcdefghijklmnopqrstuvwxyz";

function reverseStringTwo(string) {
    return string.split("").reverse().join("");
}

console.log(reverseStringTwo(alfabeto));