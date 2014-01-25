var g = require('../gen.js');

exports['stringify simple value'] = function(t) {
    var num = 100;
    var str = "A simple string";
    
    t.equal(g.stringifyVar(num), num, 'numeric value');
    t.equal(eval(g.stringifyVar(str)), str, 'string value');
    t.done();
};

exports['stringify function'] = function(t) {
    var fn = function() {
	return true;
    };
    var fn2 = function(a) {
	return a;
    };
    var fn_str;
    var fn2_str;

    fn_str = g.stringify(fn);
    fn2_str = g.stringify(fn2, 100);
    
    t.ok(eval(fn_str), 'return value - function without args');
    t.strictEqual(eval(fn2_str), 100, 'return value - function with args');
    
    t.done();
    
};

