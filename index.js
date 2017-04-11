var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/', function(req, res) {
  var response = {
    "version": "1.0",
    "response": {
      "outputSpeech": {
        "type": "PlainText",
        "text": "I like " + req.body.request.intent.slots.subject.value
      }
    }
  }

  res.send(response);
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('listening on ' + port);
});
