var express = require('express');
var app = express();
var path = require('path');

app.get('/assets/bundle.js', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'build/bundle.js'));
});

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
