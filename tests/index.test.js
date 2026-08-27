const test = require('node:test');
const assert = require('node:assert');
const { suma } = require('../src/index.js');

test('Al suma devuelve el resultado',()=> {
    assert.equal(suma(2, 3), 5);
});