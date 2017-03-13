angular.module('App', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider)
      {
      $urlRouterProvider.otherwise('/');

      //Setup states (routes)
      $stateProvider
      .state('homeState', {
        url: '/',
        component: 'homeComp'
      })
      .state('testState', {
        url: '/test',
        component: 'testComp'
      });
      //Removes # symbol for our routes
      $locationProvider.html5Mode(true);
    }
  ]);
