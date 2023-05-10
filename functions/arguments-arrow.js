// function expression funciona
const somar = function() {
    console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return console.log(total);
}

somar(1, 2)
somar(1, 2, 3, 4, 5)
somar(1, 2, 3)
somar(1, 2, 9, 25, 96)

console.log('\n\n');

// arrow function não funciona
const arrowSomar = () => {
    console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return console.log(total);
}

arrowSomar(1, 2)
arrowSomar(1, 2, 3, 4, 5)
arrowSomar(1, 2, 3)
arrowSomar(1, 2, 9, 25, 96)