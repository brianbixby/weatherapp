angular.module('App')
.component('homeComp', {
  templateUrl: 'app/containers/home/home.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl($http, $state, $location) {
  var homeComp = this;

}

HomeCompCtrl.$inject = ['$http', '$state', '$location'];
