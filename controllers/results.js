var express = require('express');
var router = express.Router();
var request = require('request');
var key = process.env.API_KEY;

router.get('/', function(req, res) {
  var url = 'http://api.wunderground.com/api/' + key + '/conditions/q/CA/San_Francisco.json';
    request(url, function(error, response, body) {
      res.send(body);
    });
  });

router.get('/forecast', function(req, res) {
  var url = 'http://api.wunderground.com/api/' + key + '/forecast/q/CA/San_Francisco.json';
    request(url, function(error, response, body) {
      res.send(body);
    });
  });

module.exports = router;
