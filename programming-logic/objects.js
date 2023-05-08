// const nomes = ['Douglas', 'Maria', 'Joao'];
// const idades = [28, 40, 35];
// console.log(nomes[0], idades[0]);

const pessoa = new Object();
pessoa.nome = 'Douglas';
pessoa.idade = 28;
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa['nome']);
console.log(pessoa.idade);

const pessoa2 = {
    nome: 'Maria',
    idade: 40
}
console.log(pessoa2);
console.log(pessoa2.nome);
console.log(pessoa2['nome']);
console.log(pessoa2.idade);