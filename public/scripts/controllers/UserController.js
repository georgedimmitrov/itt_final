(function() {

  'use strict';

    angular
        .module('myApp')
        .controller('UserController', UserController);

    function UserController($scope) {

        var vm = this;
      
        vm.users = [];

    
      }

})();