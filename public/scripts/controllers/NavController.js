myApp.controller('NavController', ['$scope', '$location', 'userModel', 
	function ($scope, $location, userModel) {
		/* Variables */
		angular.extend($scope, {
			user: userModel.getUserObject(),
			navUrl: []
		});
		
		/* Methods */
		angular.extend($scope, {
			doLogout: function () {
				userModel.doUserLogout();
				$location.path('/');
			}
		});
	}
]);