
var gen = require('./gen')();

function test_fn(arg1, arg2) {
    return arg1 + arg2;
}

var cache = gen.stringify(test_fn, 2, 4);

console.log(cache);
console.log('--- returns ---');
console.log(eval(cache));
