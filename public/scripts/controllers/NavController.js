myApp.controller('NavController', ['$scope', '$location', 'userModel',
	function ($scope, $location, userModel) {
		/* Variables */
		console.log(userModel.getUserObject());
		angular.extend($scope, {
			user: userModel.getUserObject(),
			navUrl: [{
				name: 'Игра',
				url: '/game'
			}/*, {
				name: 'Магазин',
				url: '/shop'
			}*/, {
				name: 'Класация',
				url: '/highscore'
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