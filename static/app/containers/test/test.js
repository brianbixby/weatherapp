angular.module('App')
.component('testComp', {
  templateUrl: 'app/containers/test/test.html',
  controller: TestCompCtrl,
  controllerAs: 'testComp'
});

function TestCompCtrl($http, $state, $location) {
  var testComp = this;

}

TestCompCtrl.$inject = ['$http', '$state', '$location'];
