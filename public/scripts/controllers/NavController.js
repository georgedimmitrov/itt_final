myApp.controller('NavController', ['$scope', '$location', 'userModel', 
	function ($scope, $location, userModel) {
		/* Variables */
		angular.extend($scope, {
			user: userModel.getUserObject(),
			navUrl: [{
				name: 'Game',
				url: '/game'
			}, {
				name: 'Shop',
				url: '/shop'
			}]
		});
		
		/* Methods */
		angular.extend($scope, {
			doLogout: function () {
				userModel.doUserLogout();
				$location.path('/');
			},
			
			checkActiveLink: function (routeLink) {
				console.log('----' + routeLink);
				if ($location.path() == routeLink) {
					
					return 'make-active';
				}
			}
		});
	}
]);