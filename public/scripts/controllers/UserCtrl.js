(function() {

  'use strict';

    angular
        .module('myApp')
        .controller('UserCtrl', UserCtrl);

    function UserCtrl($scope) {

        var vm = this;
      
        vm.users = [];

    
      }

})();