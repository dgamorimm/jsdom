let n = 'global';

function mostraN(){
    let n = 'local';
    
    if (true) {
        let n = 'n dentro de if com let';
    }
    
    console.log(`o valor de n: ${n}`);
}
// para cada bloco pode passar a mesma variavel sem alterar

mostraN();

console.log(`o valor de no escopo global: ${n}`);

function fnExt(){
    let n = 'n local da função fnExt';

    function fnInt() {
        let n = 'n local da função fnInt';
        console.log(n);
    }

    fnInt();
    console.log(n);
}

fnExt();