function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function add(num1, num2) {
        num1 + num2;
    };
}

function returnsAnAnonymousFunction() {
    return function(num1, num2) {
        num1 + num2;
    }
}