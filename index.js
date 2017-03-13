require('dotenv').config();
// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');
var app = express();

//Decode POST data in JSON and URL encoded formats
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Setup Path directory (static)
app.use(express.static(path.join(__dirname, 'static')));
//Observe server activity
app.use(require('morgan')('dev'));

// app.use('/api/results', require('./controllers/results'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'static/index.html'));
});

var server = app.listen((process.env.PORT || 3000), function(){
  console.log('listening on 3000');
});

module.exports = server;
