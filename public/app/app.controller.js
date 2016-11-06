(function () {
  'use strict';

  angular
    .module('gameLog')
    .controller('AppController', AppController);

  AppController.$inject = ['AppService'];

  function AppController (AppService) {
    var vm = this;

    (function () {
      vm.title = 'TEST';
    })();
  }
})();
