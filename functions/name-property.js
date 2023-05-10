const somar = function() {
    console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return console.log(total);
}

const somar2 = function testeSoma() {
    console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return console.log(total);
}

const arrowSomar = () => {
    console.log(arguments);
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return console.log(total);
}

console.log(somar.name); 
console.log(somar2.name);
console.log(arrowSomar.name);