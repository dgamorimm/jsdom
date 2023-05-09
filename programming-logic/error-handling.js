function sum(n1, n2){
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw Error('aceita apenas numeros')
    } else{
        return n1 + n2;
    }
}

try {
    console.log(sum(3, 2.9));
} catch (error) {
    console.log(`${error}`);
}