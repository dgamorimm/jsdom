let b = [];
let _b = [];

console.log(b == _b);
console.log(b === _b);
/* isso acontece porque ele não verifica 
que é o tipo lista ou seus valores, e sim o valor 
de espaço armazenado em memória */

b = _b;

console.log(b == _b);
console.log(b === _b);

/* assim é armazenado a mesma referencia na memória */

b[0] = 'teste';

console.log(b);
console.log(_b);

/* captura o mesmo valor, pois está armazenado em memória
referenciando o mesmo array */
