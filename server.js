const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var path = require('path');

app.use(express.static(__dirname + '/build/prod'));

app.listen(port);

console.log('Polymer desde node on: ' + port);
