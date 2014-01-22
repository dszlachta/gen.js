
var gen = require('../gen')();

/* local variables */
var number1 = 2;
var number2 = 4;

function test_fn(arg1, arg2) {
    return arg1 + arg2;
}

var cache = gen.stringify(test_fn, number1, number2);

console.log(cache);
console.log('--- returns ---');
console.log(eval(cache));
