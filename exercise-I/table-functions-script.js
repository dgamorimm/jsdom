const output = document.getElementById('output')
    
function mostrarTabuada(){
    const number = parseInt(prompt('Digite um numero'))
    let msg = '';
    for (let index = 1; index <= 1000; index++) {
        if (index === 10) {
            break; // se usar o break ele para o for e continua o código
            //return; // se usar o return ele sai da função e não continua o código
        }
        msg += `${index} X ${number} = ${(index * number)} <br>`;  
    }
    output.innerHTML = msg;
}

function limparTabuada(){
    output.innerHTML = '';
}