module.exports = function() {

    function _get_args() {
	var args;
	
	args = Array.prototype.slice.call(arguments, '');
	fn = args.shift();

	return {
	    fn: fn,
	    args: args
	};
    }

    var g = {
	stringifyVar: function(v) {
	    if (typeof v === 'string')
		return "'" + v.toString() + "'";
	    else
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
	    
	    res = '(' + g.stringifyFn(fn) + ')';

	    params = data.args.map(g.stringifyVar);
	    res += '.call(null, ' + params.join(', ') + ');';
	    
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

    return g;

};
