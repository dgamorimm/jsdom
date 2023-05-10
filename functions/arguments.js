function somar() {
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