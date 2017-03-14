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
      homeComp.weather = response;
      console.log(homeComp.weather);
    });
  }

  homeComp.getWeather();
}

HomeCompCtrl.$inject = ['$http', '$state', '$location', 'Weather'];
