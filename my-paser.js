var Parser = require('./lib/Parser');
var fs = require('fs');

fs.readFile('games.log', function(err, logData){
  if (err) throw err;

  var text = logData.toString();
  var parser = new Parser();

  console.log(parser.parse(text));
});
