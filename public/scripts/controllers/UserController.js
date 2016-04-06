myApp.controller('UserController', ['$scope', '$location', 'userModel',
	function ($scope, $location, userModel) {
		/* Variables */
		
		/* Functions */
		angular.extend($scope, {
			login: {
				email: 'doge@abv.bg',
				password: 'dogeroot'
			}
		});
		
		angular.extend($scope, {
			doLogin: function (loginForm) {
				var data = {
					email: $scope.login.email,
					password: $scope.login.password
				};
				
				userModel.doLogin(data)
					.then(function () {
						$location.path('/dashboard');
					});
			}
		});
	}	
]);