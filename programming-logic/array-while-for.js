//criar um array com numeros randomicos nao repetidos
function generateRandomInteger(max){
    return parseInt(Math.random() * max);
}

let arr = [];

// WHILE
while(arr.length < 20) {
    let randomNumber = generateRandomInteger(30);
    if (arr.indexOf(randomNumber) === -1) {
        arr.push(randomNumber);
    } else {
        continue;
    }
}

console.log(arr.sort());