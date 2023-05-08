let n1 = 10;
let n2 = "2.9999";

console.log(n1 * n2, typeof n1, typeof n2);
console.log(n1 / n2, typeof n1, typeof n2);
console.log(n1 - n2, typeof n1, typeof n2);
// conversão implicita (ele por baixo dos panos converte para numero)

// n2 = parseInt(n2);
// n2 = parseFloat(n2);
n2 = Number(n2);
console.log(n1 + n2, typeof n1, typeof n2);
// converte o numero para string e concatena
// Coverter string em numeros (parseInt, parseFloat, Numeber())
// parseInt e parseFloat (ignora as letras a direita caso haja ex.: 10sdfgskgbhkfdbfdh)