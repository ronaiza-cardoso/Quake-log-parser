'use strict';

const Parser = function () {

};

Parser.prototype.parse = (text) => {
  let initGames = [];
  let lines = text.split('\n');

  lines.forEach( (line) => {
    let arrayLine = line.trim().split(' ');
    let deaths = 0;
    let initText = 'InitGame:';
    let getUser  = 'ClientUserinfoChanged:';
    let killText = 'Kill:';

    switch (arrayLine[1]) {
      case initText:
        initNewGame();
        break;
      case getUser:
        getNewUser();
        break;
      case killText:
        getKills();
    }

    function initNewGame () {
      deaths = 0;
      let game = {};
      initGames.push({
        'game' : {
          total_kills : 0,
          players : [],
          kills : {}
        }
      });
      initGames[initGames.length - 1].game.push + 1;
    }

    function getNewUser () {
      let startIndex = line.indexOf('n\\');
      let endIndex = line.indexOf('\\t') - 1;
      let charNumber = endIndex - startIndex;
      let user = line.trim().substr(startIndex, charNumber);
      user = user.replace(/\\/g,'');
      if (initGames[initGames.length - 1].game.players.indexOf(user) === -1) {
        initGames[initGames.length - 1].game.players.push(user);
      }
    }

    function getKills () {
      initGames[initGames.length - 1].game.total_kills++;
      let user = arrayLine[5];
      if (user === '<world>') {
        getWorldKill();
        return;
      }
      getUserKill(user);
    }

    function getWorldKill () {
      let killedBy = arrayLine.indexOf('killed');
      let killed = arrayLine[killedBy + 1];
      for (let i = killedBy + 2; i < arrayLine.length; i ++) {
        if (arrayLine[i] === 'by') {
          break;
        }
        killed += ' ' + arrayLine[i];
      }
      initGames[initGames.length - 1].game.kills[killed] = initGames[initGames.length - 1].game.kills[killed] - 1;
      return;
    }

    function getUserKill (user) {
      for (let i = 6; i < arrayLine.length; i ++) {
        if (arrayLine[i] === 'killed') {
          break;
        }
        user += ' ' + arrayLine[i];
      }
      initGames[initGames.length - 1].game.kills[user] = initGames[initGames.length - 1].game.kills[user] + 1 || 1;
      return;
    }

  });
  return initGames[5].game;
}

 module.exports = Parser;
