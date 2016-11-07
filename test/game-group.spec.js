'use strict';

const chai   = require('chai');
const expect = chai.expect;
const Parser = require('../lib/Parser');
const fs = require('fs');

describe('Parser', () => {
  it('parse() should return a group of game data if game.log is passed in', () => {

    fs.readFile('./games.log', (err, data) => {
      if ( err ) throw err;

      let x = new Parser();
      console.log(x.parse(logGame));
      expect(x.parse(logGame)).to.be.a({});
    });

  });

});
