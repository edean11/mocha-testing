/* global describe, it */
/* jshint expr: true */

'use strict';

var expect = require('chai').expect,
    Constructor = require(process.cwd() + '/lib/Constructor');
describe('Mocha', function () {
  it('should expect true', function () {
    expect(true).to.be.true;
    expect(false).to.be.false;
  });
});

describe('Constructor', function () {
  describe('init', function () {
    it('should have public variables', function () {
      var constructed = new Constructor();
      expect(constructed.publicVariable).to.equal('foo');
    });
    it('should accept an argument', function () {
      var constructed = new Constructor('bar');
      expect(constructed.publicVariable).to.equal('bar');
    });
   });

  describe('#publicMethod', function () {
    it('should return "Hello World"', function () {
      var constructed = new Constructor();
      expect(constructed.publicVariable).to.equal('foo');
    });
    it('should accept an argument', function () {
      var constructed = new Constructor();
      expect(constructed.publicMethod()).to.equal('Hello World');
      expect(constructed.hasOwnProperty('publicMethod')).to.be.false;
    });
   });
});
