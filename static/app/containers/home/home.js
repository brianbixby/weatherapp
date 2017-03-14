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
      var fourDayInfo = response.data.forecast.simpleforecast.forecastday;
      homeComp.getChartData(fourDayInfo)
      homeComp.simpleforecast = response.data.forecast.simpleforecast.forecastday;
      console.log(response.data.forecast);
      homeComp.txtForecast = response.data.forecast.txt_forecast.forecastday;
    });
  }

  //Get 4-day forcast highs and lows for chart
  homeComp.getChartData = function(array) {
    var chartMinF = [];
    var chartMinC = [];
    var chartMaxF = [];
    var chartMaxC = [];
    for(var i=0; i<array.length; i++ ) {
      chartMinF.push(array[i]['low']['fahrenheit']);
      chartMinC.push(array[i]['low']['celsius']);
      chartMaxF.push(array[i]['high']['fahrenheit']);
      chartMaxC.push(array[i]['high']['celsius']);
    }
    console.log("The 10-day lows (f): ", chartMinF);
    console.log("The 10-day lows (c): ", chartMinC);
    console.log("The 10-day highs (f): ", chartMaxF);
    console.log("The 10-day highs (c): ", chartMaxC);
  }

  homeComp.getForecast();
  homeComp.getWeather();
}

HomeCompCtrl.$inject = ['$http', '$state', '$location', 'Weather'];
