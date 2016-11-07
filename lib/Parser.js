'use strict';

const Parser = function () {

};

Parser.prototype.parse =  ( text ) => {
    var initGames = [];
    var lines = text.split('\n');

    lines.forEach( ( line ) => {
      var arrayLine = line.trim().split(' ');
      var deaths = 0;
      var initText = 'InitGame:';
      var getUser  = 'ClientUserinfoChanged:';
      var killText = 'Kill:';

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
        var game = {};
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
        var startIndex = line.indexOf('n\\');
        var endIndex = line.indexOf('\\t') - 1;
        var charNumber = endIndex - startIndex;
        var user = line.trim().substr(startIndex, charNumber);
        var user = user.replace(/\\/g,'');
        if (initGames[initGames.length - 1].game.players.indexOf(user) === -1) {
          initGames[initGames.length - 1].game.players.push(user);
        }
      }

      function getKills () {
        initGames[initGames.length - 1].game.total_kills++;
        var user = arrayLine[5];
        if (user === '<world>') {
          getWorldKill();
          return;
        }
        getUserKill(user);
      }

      function getWorldKill () {
        var killedBy = arrayLine.indexOf('killed');
        var killed = arrayLine[killedBy + 1];
        for (var i = killedBy + 2; i < arrayLine.length; i ++) {
          if (arrayLine[i] === 'by') {
            break;
          }
          killed += ' ' + arrayLine[i];
        }
        initGames[initGames.length - 1].game.kills[killed] = initGames[initGames.length - 1].game.kills[killed] - 1;
        return;
      }

      function getUserKill (user) {
        for (var i = 6; i < arrayLine.length; i ++) {
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
};

 module.exports = Parser;
