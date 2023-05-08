let n = 0;

n = n || 10;

console.log(n);
/* se a primeira expressão for considerada falsa 
em um operador condicional ela assume o segundo valor */

let isValid = false;

isValid && console.log('é valido (condição AND)');
isValid || console.log('é valido (condição OU)');