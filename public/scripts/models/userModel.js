myApp.factory('userModel', ['$http', '$cookies',
	function ($http, $cookies) {
		var userModel = {};

		userModel.doLogin = function (loginData) {
			return $http({
				headers: {
					'Content-Type': 'application/json'
				},
				url: baseUrl + 'auth',
				method: "POST",
				data: {
					email: loginData.email,
					password: loginData.password
				}
			}).success(function (response) {
				console.log(response);
				localStorage.setItem('auth', JSON.stringify(response));
			}).error(function (data, status, headers) {
				console.log(data, status, headers);
				alert(data);
			});
		};

		/**
		 * Return whether the user is looged in or not
		 * based on the cookie set during the login
		 *
		 * @return {boolean}
		 */
		userModel.getAuthStatus = function () {
			var status = JSON.parse(localStorage.getItem('auth'));

			if (status) {
				return true;
			}

			return false;

		};

		/**
		 * Get the user object converted from string to JSON
		 * @return {user object}
		 */
		userModel.getUserObject = function () {
			var userObj = JSON.parse(localStorage.getItem('auth'));

			return userObj;
		};

		userModel.doUserLogout = function () {
			localStorage.removeItem('auth');
		};

		return userModel;
	}
]);