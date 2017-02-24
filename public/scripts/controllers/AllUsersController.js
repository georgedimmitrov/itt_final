myApp.controller('AllUsersController', ['$scope', '$http',
  function ($scope, $http) {
    /* Variables */
    $scope.sortType = 'highscore';
    $scope.sortReverse = true;

    /* Functions */
    $http.get('./highscore-wat')
      .success(function(data) {
        $scope.allUsers = data;
        console.log(data);
      })
      .error(function(data, status, headers, config) {
        console.err('error', data);
      });
  }
]);