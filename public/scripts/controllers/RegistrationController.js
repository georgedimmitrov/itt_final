/*(function() {

  'use strict';

    angular
        .module('myApp')
        .controller('UserController', UserController);

    function UserController($scope, $location) {

        var vm = this;
      
        vm.users = [];

    
      }

})();*/

angular
	.module('myApp')
	.controller('RegistrationController', ['$scope', '$location', 'registerModel',
		function ($scope, $location, registerModel) {
			/* Variables */
			angular.extend($scope, {
				newUser: {},
				errorDiv: false,
				errorMessages: []
			});
			
			/* Functions */
			angular.extend($scope, {
				registerNewUser: function (registerUserForm) {
					if (registerUserForm.$valid) {
						registerModel.saveUser($scope.newUser)
							.success(function (response) {
								console.log('successfully sent data');
							})
							.error(function (error) {
								console.log(error);
							});
					} else {
						console.log('error');
					}
				}
			});
		}	
	]);