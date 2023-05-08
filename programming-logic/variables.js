// var, let. const

// var -> ES5 - cross-browser
// let e const -> ES2015

var teste1 = 'minha string';
var teste1 = '10';
console.log(teste1);
// 10

let teste2 = 'minha string';
// let teste2 = '10';
console.log(teste2);
// vai dar erro

const teste3 = 'minha string';
// const teste3 = '10';
console.log(teste3);
// vai dar erro

// • var é a forma mais antiga de declarar variáveis em JavaScript, 
// enquanto let e const foram introduzidos na versão ES6 da linguagem.

// • Variáveis declaradas com var são definidas no escopo da função ou 
// no escopo global, enquanto variáveis declaradas com let e const têm 
// escopo de bloco, o que significa que elas só são acessíveis dentro do
//  bloco em que foram definidas.

// • Variáveis declaradas com let podem ser reatribuídas a um novo valor, 
// mas não podem ser redeclaradas no mesmo escopo. Variáveis declaradas 
// com const, por outro lado, não podem ser reatribuídas a um novo valor 
// nem redeclaradas no mesmo escopo.

// • Uma variável declarada com const deve ser inicializada na declaração, 
// ou seja, atribuída um valor imediatamente, enquanto variáveis declaradas 
// com let e var podem ser inicializadas mais tarde.

// • Variáveis declaradas com const são usadas para armazenar valores que
// não devem ser modificados posteriormente, enquanto let é usado para 
// valores que podem ser alterados. var é geralmente evitado devido a seu 
// escopo impreciso.

// - Em geral, é recomendável usar const sempre que possível, pois isso 
// ajuda a evitar erros de programação e torna o código mais seguro e legível. 
// Use let para variáveis que precisam ser modificadas e var somente se você 
// precisar suportar navegadores mais antigos que não suportam let e const.