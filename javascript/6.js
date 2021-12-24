// Inverter uma cadeia de caracteres 3

const alfabeto = "abcdefghijklmnopqrstuvwxyz";

function reverseStringThree(string) {
    if (string === "") {
        return "";
    } else {
        return reverseStringThree(string.substr(1)) + string.charAt(0);
    }
}

console.log(reverseStringThree(alfabeto))