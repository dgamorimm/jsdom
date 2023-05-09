function test(){
    console.log(this);
}
// this é no objeto window


const obj = {
    n: 0,
    test2 : test
}

obj.test2()

const obj2 = {
    n: 0,
    test
}

obj.test()