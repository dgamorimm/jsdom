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

let n3 = 10;
let n4 = 2;
n4 = n4.toString(10); //base 10, ja esta implicto e não precisa passar
console.log(n4, typeof n4);
let n5 = 15;
n5 = n5.toString(16); //base hexadecimal
console.log(n5, typeof n5);
// convertendo para string