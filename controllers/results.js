var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/weather', function(req, res) {
  var url = 'http://api.openweathermap.org/data/2.5/forecast/city?id=5809844&APPID=' + key;
    request(url, function(error, response, body) {
      res.send(body);
    });
  });


module.exports = router;
