myApp.controller('RegistrationController', ['$scope', '$rootScope', '$location', 'registerModel',
		function ($scope, $rootScope, $location, registerModel) {
			/* Variables */
			angular.extend($scope, {
				newUser: {},
				errorDiv: false,
				errorMessages: []
			});

			/* Functions */
			angular.extend($scope, {
				saveNewUser: function (addUserForm) {
					if (addUserForm.$valid) {
						$scope.formSubmitted = false;

						angular.extend($rootScope, {
							userData: $scope.newUser
						});

						registerModel.saveUser($scope.newUser)
							.success(function (response) {
								console.log('successfully sent data');
								$location.path('/login');
							})
							.error(function (error) {
								console.log(error);
							});
					} else {
						$scope.formSubmitted = true;
						console.log('error');
					}
				}
			});
		}
	]);