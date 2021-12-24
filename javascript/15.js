const num = 2000;

// Converter um número em uma moeda local

console.log(new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(num))