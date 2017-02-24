myApp.controller('UserController', ['$scope', '$location', 'userModel', '$http',
	function ($scope, $location, userModel) {
		/* Variables */

		/* Functions */
		angular.extend($scope, {
			login: {
				email: 'georgi@abv.bg',
				password: 'georgiroot'
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

		// angular.extend($scope, {
		// 	loadData: function($scope, $http) {
		// 		$http.get('./highscore-wat')
		// 			.success(function(data) {
		// 				console.log(data);
		// 			});
		// 	}
		// });


	}
]);