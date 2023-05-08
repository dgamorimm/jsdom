let idade = 16;
let paisPresentes = false;
let comprouBilhete = true;

if (!comprouBilhete === true){
    console.log('Não. Comprou o bilhete');
}else{
    if (idade >= 18){
        console.log('Sim. É maior de idade');
    }else{
        console.log('Não. É menor de idade');
    }
}