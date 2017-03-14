var express = require('express');
var router = express.Router();
var request = require('request');
var key = process.env.API_KEY;

router.get('/', function(req, res) {
  console.log("backend");
  console.log(req);
  var url = 'http://api.openweathermap.org/data/2.5/forecast?id=5809844&APPID=' + key;
    request(url, function(error, response, body) {
      res.send(response);
      console.log("THIS IS BODY: ", body);
    });
  });


module.exports = router;
