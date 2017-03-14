var express = require('express');
var router = express.Router();
var request = require('request');
var key = process.env.API_KEY;

router.get('/', function(req, res) {
  console.log("backend");
  console.log(req);
  var url = 'http://api.wunderground.com/api/' + key + '/conditions/q/CA/San_Francisco.json';
    request(url, function(error, response, body) {
      res.send(response);
      console.log("THIS IS BODY: ", body);
    });
  });


module.exports = router;
