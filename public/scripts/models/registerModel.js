angular
    .module('myApp')
    .factory('registerModel', ['$http', 
    	function ($http) {
			return {
				saveUser: function (userData) {
					return $http({
						headers: {
							'Content-Type': 'application/json'
						},
						url: baseUrl + 'register',
						method: "POST",
						data: {
							email: userData.email,
							name: userData.name,
							password: userData.password,
							location: userData.location
						}
					});
				}
			}; 		
    	}
	]);