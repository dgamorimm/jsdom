// undefined, null, symbol (ES2015)

/* undefined ---> significa que a variavel foi declarada,
mas não foi atribuida nenhum valor */

/* null ---> significa que a variavel foi declarada,
e foi atribuido o valor null, ou seja, não tem valor nenhum 
O null é um erro de implementação do JS, pois o tipo é um object e não um valor
nulo*/

// exemplo undefined
// let varTest;
// console.log(typeof varTest, varTest);

let varTest = null;
console.log(typeof varTest, varTest);

varTest = 10;
console.log(typeof varTest, varTest);