'use strict';

const chai   = require('chai');
const expect = chai.expect;
const Parser = require('../lib/Parser');
const fs = require('fs');


describe('Parser', () => {
  it('parse() should return [] if empty string is passed in', () => {

    let myParser = new Parser();

    console.log(myParser.parse(''));

    expect(myParser.parse('')).to.be.empty;

  });
});

describe('Parser', () => {
  it('parse() should return a group of game data if game.log is passed in', (done) => {

    fs.readFile('./games.log', (err, data) => {
      if ( err ) throw err;

      let myParser = new Parser();
      let logGame = data.toString();

      console.log( myParser.parse ( logGame ) );;

      expect( myParser.parse ( logGame ) ).to.be.a('array');
      done();

    });
  });
});

describe('Parser', () => {
  it('parse() should return total_kills', (done) => {

    fs.readFile('./games.log', (err, logData) => {
      if ( err ) throw err;

      let text     = logData.toString();
      let myParser = new Parser();
      let result   = myParser.parse(text);

      expect( ( result[0].game.total_kills ) ).to.be.a('number');

      done();

    });
  });
});

describe('Parser', () => {
  it('parse() should return game players', (done) => {

    fs.readFile('./games.log', (err, logData) => {
      if ( err ) throw err;

      let text     = logData.toString();
      let myParser = new Parser();
      let result   = myParser.parse(text);

      console.log(result[9].game.players);

      expect( ( result[9].game.players ) ).to.be.a('array');

      done();

    });
  });
});

describe('Parser', () => {
  it('parse() should return number of kills per player', (done) => {

    fs.readFile('./games.log', (err, logData) => {
      if ( err ) throw err;

      let text     = logData.toString();
      let myParser = new Parser();
      let result   = myParser.parse(text);

      console.log(result[9].game.kills['Assasinu Credi']);

      expect( ( result[9].game.kills['Assasinu Credi'] ) ).to.be.a('number');

      done();

    });
  });
});
