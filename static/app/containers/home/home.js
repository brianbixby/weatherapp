angular.module('App')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl($http, $state, $location, Weather) {
  var homeComp = this;

  //Returns current weather result for Seattle from API using service
  homeComp.getWeather = function() {
    Weather.result().then(function(response) {
      homeComp.weather = response.data.current_observation;
      // console.log(response);
    });
  }
  homeComp.getForecast = function() {
    Weather.forecast().then(function(response) {
      homeComp.forecast = response.data.forecast;
      homeComp.simpleforecast = response.data.forecast.simpleforecast.forecastday;
      console.log(response.data.forecast);
    });
  }
  homeComp.getForecast();
  homeComp.getWeather();
}

HomeCompCtrl.$inject = ['$http', '$state', '$location', 'Weather'];
