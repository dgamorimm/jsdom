const pessoa = {
    nome : 'Douglas',
    idade: 28,
    email: 'douglas@server.com'
}

console.log(pessoa);

for (let key in pessoa) {
    console.log(key);
    console.log(pessoa[key]);
}