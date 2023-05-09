(function(n1, n2, n3) {
    let isValid = false
    console.log('menu', isValid);

    function init() {
        console.log('init do menu');
        return n1 + n2 + n3
    }
    console.log(init());
})(1, 2, 3)