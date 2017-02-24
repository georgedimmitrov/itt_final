myApp.controller('GlobalController', ['$scope', '$http',
	function ($scope) {
		$scope.global = {};
		$scope.global.navUrl = 'views/nav.html';
	}
]);