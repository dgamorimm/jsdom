// const nomes = ['' , '', ''];
const pessoa = {nome: 'Douglas', idade : 10, email: 'douglas@server.com'};
const pessoa1 = {nome: 'Maria', idade : 40, email: 'maria@server.com'};
const pessoa2 = {nome: 'Joao', idade : 35, email: 'joao@server.com'};
// e seu eu tiver mais pessoas ?

const pessoas = [pessoa, pessoa1, pessoa2];

for (let i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade}`); 
}