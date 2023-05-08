let numero = 27;


// while
let idx = 1;
while (idx <= 10) {
    console.log(`${idx} x ${numero} = ${(idx * numero)}`);
    idx++;
}
console.log('saiu do loop WHILE\n\n');

// do-while
let idx2 = 1;
do{
    console.log(`${idx2} x ${numero} = ${(idx2 * numero)}`);
    idx2++;
} while (idx2 <= 10)

console.log('saiu do loop DO-WHILE\n\n');

// for

for (let j = 0; j <= 10 ; j++) {
    console.log(`${j} x ${numero} = ${(j * numero)}`);
}
console.log('saiu do loop FOR');
