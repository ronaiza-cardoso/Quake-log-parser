'use strict';

const chai   = require('chai');
const expect = chai.expect;
const Parser = require('../lib/Parser');

describe('Parser', () => {
  it('parse() should return a [] if a empty string is passed in', () => {
    let myParser = new Parser();
    console.log(myParser.parse(''));
    expect(myParser.parse('')).to.be.empty;
  });

  
});
