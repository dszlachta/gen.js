
function stringifyVar(v) {
    return eval(v);
}

function stringifyFn(fn) {
    return fn.toString();
}

function stringify(/*args*/) {
    var args;
    var fn;
    var params;
    var res;

    args = Array.prototype.slice.call(arguments, '');
    fn = args.shift();

    res = '(' + stringifyFn(fn) + ')';

    params = args.map(stringifyVar);
    res += '.call(null, ' + params.join(', ') + ');';
    
    return res;
}

function test_fn(arg1, arg2) {
    return arg1 + arg2;
}

var cache = stringify(test_fn, 2, 4);

console.log(cache);
console.log('--- calling ---');
console.log(eval(cache));
