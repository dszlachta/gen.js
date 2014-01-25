// a simple, but complete program

// in real-life we would declare
// var r = require('requirejs');
// but this is only example, so we'll mock
// that function:
var define = function(){};
var g = require('../gen.js');

// our data
var ppl = [
    [ 2101, 'John' ],
    [ 2102, 'Anne' ],
    [ 2103, 'Kathy' ],
    [ 2104, 'Paul' ]
];

function defModule(id, name) {
    define(id, function() { return name; });
}

ppl.forEach(function(data) {
    var s = g.stringify(defModule, data[0], data[1]);
    
    // for sake of simplicity of this example we'll just
    // print the results, instead of writting them to file
    console.log(s);
});
    

