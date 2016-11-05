const chai   = require('chai');
const expect = chai.expect;
const Parser = require('../lib/parse');

describe('Parser', () => {
  it('parse() should be a []', () => {
    let myParser = new Parser();
    console.log(myParser.parser());
    expect(myParser.parser()).to.be.empty;
  });
});
