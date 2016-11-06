const Parser = function () {};

Parser.prototype.parse = function(text){
  var initGames = [];
  var lines = text.split('\n');

  lines.forEach(function(line){
    var arrayLine = line.trim().split(' ');
    var deaths = 0;
    var initText = "InitGame:";
    var getUser = "ClientUserinfoChanged:";

    var killText = "Kill:";

    switch (arrayLine[1]) {
      case initText:
        deaths = 0;
        initGames.push({
          'game': {
            total_kills: 0,
            players: [],
            kills: {}
          }
        });
        break;
      case getUser:
        var startIndex = line.indexOf('n\\') + 1;
        var endIndex = line.indexOf('\\t');
        var charNumber = endIndex - startIndex;
        var user = line.trim().substr(startIndex, charNumber);
        var user = user.replace(/\\/g, '');
        if(initGames[initGames.length - 1].game.players.indexOf(user) === -1){
          initGames[initGames.length - 1].game.players.push(user);
        }
        break;
      case killText:
        initGames[initGames.length - 1].game.total_kills++;
        var user = arrayLine[5];
        if (user === '<world>'){break;
          var KilledBy = arrayLine.indexOf('killed');
          var killed = arrayLine[KilledBy + 1];
          for (var i = KilledBy + 2; i < arrayLine.length; i++){
            if(arrayLine[i] === 'by'){
              break;
            }
            killed += ' ' + arrayLine[i];
          }
          initGames[initGames.length -1].game.kills[killed] = initGames[initGames.length - 1].game.kills[killed] - 1;
          break;
        }
        for(var i = 6; i < arrayLine.length; i++){
          if(arrayLine[i] === 'killed'){
            break;
          }
          user += ' ' + arrayLine[i];
        }
        initGames[initGames.length -1].game.kills[user] = initGames[initGames.length - 1].game.kills[user] + 1 || 1;
        break;
    }
  });
  return initGames[5].game.kills;
};

 module.exports = Parser;
