// com função
function fn(cb){
    console.log('executar ação de callback');
    console.log(typeof cb);
    typeof cb === 'function' && cb();
}

function callback() {
    console.log('função passada por parametro');
}

fn(callback)


// passando para um objeto
const obj = {
    callback
}

obj.callback()

// function para retornar outra function - closure

function fn2(n1) {

    return function (n2){
         return n1 * n2;
    }
}
// armazena o numero 10 e retorna a segunda function
// pega o valor de n1 que foi passada na primeira e multiplica com a segunda
const funcao2 = fn2(10)
const mult = funcao2(2)
console.log(mult);


function fn3() {
    fn3.count++
    return function _fn3(){
        console.log('funcao retornada por parametro');
    }
}
fn3.count = 0

const funcao3 = fn3()
const funcao3a = fn3()
const funcao3b = fn3()
funcao3()
funcao3a()
funcao3b()