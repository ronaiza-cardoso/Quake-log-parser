(function () {
  'use strict';

  angular
    .module('gameLog')
    .controller('AppController', AppController);

  AppController.$inject = ['AppService'];

  function AppController (AppService) {
    var vm = this;

    (function () {
      AppService.getGameLog().then(getResult);

      function getResult ( response ) {
        vm.gameLog = response.data;
        console.log(vm.gameLog);
      }
    })();
  }
})();
