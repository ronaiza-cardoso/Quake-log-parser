(function () {
  'use strict';

  angular
    .module('gameLog')
    .factory('AppService', AppService);

  AppService.$inject = ['$http'];
  function AppService ($http) {
    var services = {
      getGameLog : getGameLog
    };

    return services;

    function getGameLog () {
      //
    }
  }
})();
