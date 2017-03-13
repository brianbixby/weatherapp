var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/recipes', function(req, res) {
  var url = 'https://api.edamam.com/search' + queryString + '&app_id=c8ceed5f&app_key=bbfa5375222109bd6452b480ab860eaa&from=0&to=' + queryParams +'';
    request(url, function(error, response, body) {
      res.send(body);
    });
  });


module.exports = router;
