myApp.controller('UserController', ['$scope', '$rootScope', '$location', 'userModel', '$http',
	function ($scope, $rootScope, $location, userModel, registerModel) {
		/* Functions */
		// angular.extend($scope, {
		// 	login: {
		// 		email: 'georgi@abv.bg',
		// 		password: 'georgiroot'
		// 	}
		// });
		if ($rootScope.userData) {
			angular.extend($scope, {
				login: {
					email: $rootScope.userData.email,
					password: $rootScope.userData.password
				}
			});
		}

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