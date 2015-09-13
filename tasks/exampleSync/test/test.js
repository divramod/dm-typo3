var should = require('chai').should();
var expect = require('chai').expect;
var colors = require("colors");

// =========== [ dm-file TESTS ] ===========
describe('exampleSync sync'.red, function() {

    // =========== [ start ] ===========
    it('success: should ...', function success() {
        var result = require('./../index.js').start("exampleSync");
        result.should.equal("exampleSync");
    });

    // =========== [ start ] ===========
    it.skip('error: should ...', function error() {
        var result = require('./../index.js').start("exampleSync");
        result.should.equal("falseexampleSync");
    });

});
