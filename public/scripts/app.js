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
					controller: 'UserCtrl'
				});
				
				$routeProvider.when('/login', {
					templateUrl: 'views/login.html',
					controller: 'UserCtrl'
				});
				
				$routeProvider.when('/register', {
					templateUrl: 'views/register.html',
					controller: 'UserCtrl'
				});
				
				$routeProvider.when('/dashboard', {
					templateUrl: 'views/dashboard.html',
					controller: 'UserCtrl'
				});
				
				$routeProvider.otherwise('/');
        	}
    	]);

}());