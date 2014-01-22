module.exports = function() {

    var g = {
	stringifyVar: function(v) {
	    return eval(v);
	},

	stringifyFn: function(fn) {
	    return fn.toString();
	},

	stringify: function(/*args*/) {
	    var args;
	    var fn;
	    var params;
	    var res;
	    
	    args = Array.prototype.slice.call(arguments, '');
	    fn = args.shift();
	    
	    res = '(' + g.stringifyFn(fn) + ')';

	    params = args.map(g.stringifyVar);
	    res += '.call(null, ' + params.join(', ') + ');';
	    
	    return res;
	}

    }

    return g;

};
