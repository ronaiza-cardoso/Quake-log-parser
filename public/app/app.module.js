(function () {
  'use strict';

  angular
    .module('gameLog', [
      'ui.router',
      'ui.bootstrap',
    ])
    .config(routesConfig);

  routesConfig.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider']
  function routesConfig ($urlRouterProvider, $locationProvider, $stateProvider) {
    $stateProvider
      .state('home', {
        url         : '/',
        templateUrl : 'app/app.html',
        controller  : 'AppController as vm',
      });

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  }
})();
