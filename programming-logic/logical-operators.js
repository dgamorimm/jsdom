/*
    AND (&&)
    OR (||)
    NOT (!)
*/

let idade = 16;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);

let n1, n2, n3, media;
n1 = 10;
n2 = 10;
n3 = 10;

media = (n1 + n2 + n3) / 3;
console.log(`media: ${media}`);