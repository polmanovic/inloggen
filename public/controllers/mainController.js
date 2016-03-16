angular.module('mainController', [])
    .controller('mainController', ['$scope', '$http', function($scope, $http) {

      // register functie, start wanneer register button geklikt is
      $scope.register = function(){

      		console.log('registreren');

	      $http.post("/user/create/", $scope.data).success(function(status) {
	        console.log('Data posted successfully');
	      })
	   };

}]);