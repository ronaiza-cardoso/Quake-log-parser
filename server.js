'use strict';

const express = require('express');
const fs = require('fs');
const Parser = require('./lib/Parser');

const app = express();
const PORT = 4000;

app.use(express.static(__dirname + '/public'));

app.get('/games', (req, res) => {
  fs.readFile('games.log', (err, logData) => {
    if(err) {
      console.log(err);
      res.status(500).send({error : err });
    }

    let text = logData.toString();
    let myParser = new Parser();
    let result = myParser.parse(text);

    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log('Express Server is listening on port: ' + PORT);
});
