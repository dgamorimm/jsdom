// Function - Hoisting - Capacidade de "içar" uma function declaration
teste()

function teste(){
    console.log('teste')
}

// ↓ se for passado assim não funciona ↓
/* const teste = function teste(){
     console.log('teste')
} */



// Function - Variable
console.log(minhaVar);
var minhaVar = 'variavel'
// a variavel existe mas é undefined pois ainda não foi passado o valor
