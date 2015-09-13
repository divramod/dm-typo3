var should = require('chai').should();
var expect = require('chai').expect;
var colors = require("colors");

// =========== [ dm-file TESTS ] ===========
describe('createProject sync'.red, function() {

    // =========== [ start ] ===========
    it('success: should ...', function success() {
        var result = require('./../index.js').start("createProject");
        result.should.equal("createProject");
    });

    // =========== [ start ] ===========
    it('error: should ...', function error() {
        var result = require('./../index.js').start("createProject");
        result.should.equal("falsecreateProject");
    });

});
