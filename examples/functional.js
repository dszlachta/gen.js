
var gen = require('../gen');

function higher1(citizenship) {
    return function(name) {
	return [name, 'is a', citizenship].join(' ');
    }
}

var czech = higher1('Czech');
var cache = gen.with_scope(gen.stringify(czech, 'Bohumil Hrabal'), {citizenship: 'Czech'});
console.log(cache);
console.log(eval(cache));
