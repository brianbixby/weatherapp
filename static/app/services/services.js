angular.module('App')

//Get Weather info
.factory('Weather', ['$http', function($http) {
  return {
    result: function() {
      var URL = '/api/weather';
      var req = {
        url: URL,
        method: "GET"
      };
      console.log("in service");
      return $http(req);
    },
    forecast: function() {
      var URL = '/api/weather/forecast';
      var req = {
        url: URL,
        method: "GET"
      };
      console.log("in service");
      return $http(req);
    }
  };
}]);
