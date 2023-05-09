// 'use strict'
// faz com que você escreva melhor o seu programa e deixa mais seguro

// x = 10 
// Erro: x is not defined

let y = 10
// esse é o correto

function foo() {
    'use strict'
    x = 20
    // vai dar erro
}


function dobrar(n1, n1) {
    'use strict'
    console.log(n1, n1);
    return n1 * n1
    // vai dar erro
}

function Teste() {
    'use strict'
    console.log(this);
    this.a = 'a'
    // vai dar erro
}