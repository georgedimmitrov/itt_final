var myApp = angular.module('myApp', [
        'ngResource',
        'ngRoute',
        'ngCookies',
        'ui.bootstrap'
    ]);

myApp.config(['$routeProvider', '$locationProvider',
    	function ($routeProvider, $locationProvider) {
    		$routeProvider.when('/', {
				templateUrl: 'views/login.html',
				controller: 'UserController'
			});
			
			$routeProvider.when('/login', {
				templateUrl: 'views/login.html',
				controller: 'UserController'
			});
			
			$routeProvider.when('/register', {
				templateUrl: 'views/register.html',
				controller: 'RegistrationController'
			});
			
			$routeProvider.when('/dashboard', {
				templateUrl: 'views/dashboard.html',
				controller: 'UserController',
				authenticated: true
			});
			
			$routeProvider.when('/game', {
				templateUrl: 'views/game.html',
				controller: 'UserController',
				authenticated: true
			});
			
			$routeProvider.when('/shop', {
				templateUrl: 'views/shop.html',
				controller: 'UserController',
				authenticated: true
			});
			
			$routeProvider.when('/logout', {
				templateUrl: 'views/logout.html',
				controller: 'UserController',
				authenticated: true
			});
			
			$routeProvider.otherwise('/');
    	}
	]);
	
myApp.run(["$rootScope", "$location", 'userModel',
	function($rootScope, $location, userModel) {

		$rootScope.$on("$routeChangeStart",
			function(event, next, current) {

				// if getAuthStatus returns false then we get redirected to /
				if (next.$$route.authenticated) {
					if (!userModel.getAuthStatus()) {
						$location.path('/');
					}
				}

				// if you are logged in and you try to go to homescreen - '/'
				// you get redirected back
				if (next.$$route.originalPath == '/') {
					// console.log('login page');
					if (userModel.getAuthStatus()) {
						$location.path(current.$$route.originalPath);
					}
				}

			});
	}
]);