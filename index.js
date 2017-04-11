var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('working');
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('listening on ' + port);
});
