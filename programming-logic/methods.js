const produto = {
    nome: 'caneta',
    qtd : 10,
    comprar : function(n){
        if(n > this.qtd){
            return 'quantidade nao disponivel';
        }
        this.qtd -= n;
    },
    teste1 : function() {
        console.log('teste1');
        console.log(this);
    },
    teste2 : () => {
        console.log('teste2');
        console.log(this);
        // este aqui se torna um window e não um object, por isso não aparece
    }
}

const produto2 = {
    nome: 'lapis',
    qtd : 20,
    comprar(n){
        if(n > this.qtd){
            return 'quantidade nao disponivel';
        }
        this.qtd -= n;
    }
}

produto.comprar(3)
console.log(produto);
produto.comprar(13)
console.log(produto);


produto2.comprar(3)
console.log(produto2);
produto2.comprar(13)
console.log(produto2);