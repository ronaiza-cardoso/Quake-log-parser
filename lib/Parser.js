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
        console.log(arrayLine);
        break;
      case killText:
        initGames[initGames.length - 1].game.total_kills++;
        break;
    }
  });
  console.log(initGames);

};

 module.exports = Parser;
