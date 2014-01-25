"use strict";

function _get_args() {
    var args;
    var fn;
    
    args = Array.prototype.slice.call(arguments, '');
    fn = args.shift();

    return {
	fn: fn,
	args: args
    };
}

function _paren(str) {
    return ['(', str, ')'].join('');
}

var g = {
    stringifyObj: function(o) {
	var json = JSON.stringify(o);
	return g.stringify((function(j) { return JSON.parse(j); }), o);
    },

    stringifyVar: function(v) {
	if (typeof v === 'string')
	    return "'" + v.toString() + "'";
	if (typeof v === 'object')
	    return g.stringifyObj(v);

	return eval(v);
    },

    stringifyFn: function(fn) {
	return fn.toString();
    },

    stringify: function(/*args*/) {
	var data;
	var fn;
	var params;
	var res;
	
	data = _get_args.apply(null, arguments);



	fn = data.fn;
	
	res = _paren(g.stringifyFn(fn));

	if (data.args != false) {
	    params = data.args.map(g.stringifyVar);
	    res += '.call(null, ' + params.join(', ') + ');';
	} else {
	    res += '();';
	}
	
	return res;
    },

    with_scope: function(str, vars) {

	var res;
	var defs = [];

	for (var key in vars) {
	    if (vars.hasOwnProperty(key))
		defs.push('var ' + key + ' = ' + g.stringifyVar(vars[key]) + ";\n");
	}
	
	res = (new Function(defs.join(' ') + 'return ' + str)).toString();
	return '(' + res + ')()';
    }

}

module.exports = g;

