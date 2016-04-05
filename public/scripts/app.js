(function() {

    'use strict';

    angular
        .module('myApp', [
            'ngResource',
            'ngRoute',
            'ui.bootstrap'
        ])
        .config(['$routeProvider',
        	
        	function ($routeProvider) {
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
					controller: 'UserController'
				});
				
				$routeProvider.otherwise('/');
        	}
    	]);

}());