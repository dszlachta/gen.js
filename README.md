GEN.JS
======

This simple file generates JavaScript source from JavaScript.

In runtime, it turns functions into strings for future usage.
It can store values of functions arguments, and generate functions
calls with those values.

```javascript
function(arg1, arg2) {
  return arg1 + arg2;
}
```

The function above (for `arg1`=2 and `arg2`=4) turns to string:

```
(function(arg1, arg2) {
  return arg1 + arg2;
}).call(null, 2, 4)
```

Enviroment
----------

Runs on Node and in browser (with requirejs).