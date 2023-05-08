// interromper um loop ou pular para o próximo

let numero = 27;

// while
let idx = 1;
while (idx <= 10) {
    idx++;
    if (idx === 5){
        continue
    }
    console.log(`${idx} x ${numero} = ${(idx * numero)}`);
}
console.log('saiu do loop WHILE\n\n');

// do-while
let idx2 = 1;
do{
    if (idx2 > 10) {
        console.log('Digitou numero maior que 10');
        break;
    }
    console.log(`${idx2} x ${numero} = ${(idx2 * numero)}`);
    idx2++;
} while (idx2 <= 10)

console.log('saiu do loop DO-WHILE\n\n');

// for

for (let j = 0; j <= 10 ; j++) {
    if (j === 5){
        continue;
        // pula o numero 5
    }
    console.log(`${j} x ${numero} = ${(j * numero)}`);
}
console.log('saiu do loop FOR');
