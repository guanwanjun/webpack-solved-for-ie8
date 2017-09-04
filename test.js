require('babel-polyfill');
console.log('test.js')
require.ensure([], function(require) {
    var a = require("./test2");
    a();
}, 'tips');