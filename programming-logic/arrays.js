const arr = new Array();
console.log(typeof arr, arr);

const arr2 =  new Array(true, 'Douglas', 28, new Array(2,4,10));
console.log(arr2);
console.log(arr2[3]);
console.log(arr2[3][0]);

const arr3 = new Array();
arr3[0] = 'Douglas';
arr3[1] = 28;
console.log(arr3);
console.log(arr3.length);
arr3.push('adicionado com push');
arr3.push('a', 'b', 'c');
console.log(arr3);