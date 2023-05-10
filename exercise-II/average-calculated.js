/*

==== Construir uma função para calcular média

Pode receber um ou mais valores numéricos
Deve retornar um único número
Deve gerar um erro se receber um parâmetro não numérico
Deve retornar zero caso não receba nenhum parâmetro

---- Exemplos
calcularMedia() // 0 feito
calcularMedia(2, 6) // 4
calcularMedia(2, 6, 1, 1, 2, 6) // 3
calcularMedia("2", "6") // Error feito
*/


function calcularMedia() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number'){
            throw Error(`O elemento do array ${arguments[i]} não é do tipo numero`)
        } else {
            total += arguments[i]
        }
    }
    return (total / arguments.length) || 0
}

console.log(calcularMedia(2, 2, 2));