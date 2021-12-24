// Inverter uma cadeia de caracteres 1

const alfabeto = "abcdefghijklmnopqrstuvwxyz";

function reverseString(string) {
    const splitString = string.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
}

console.log(reverseString(alfabeto));