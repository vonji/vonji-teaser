var path = require('path');

var express = require('express');
var app = express();

var indexHtml = path.resolve(__dirname, '../dist/index.html');
var distDirectory = path.resolve(__dirname, '../dist');

app.use(express.static(distDirectory));

app.get('*', function(req, res) { res.sendFile(indexHtml); });

app.listen(8081, function() {
  console.log('SERVER running on port 8081');
});
