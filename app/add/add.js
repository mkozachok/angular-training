'use strict';

angular.module('myApp.add', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add', {
    templateUrl: 'add/add.html',
    controller: 'AddCtrl'
  });
}])

.controller('AddCtrl', function($scope, testFactory, $location) {
	$scope.submit = function(){
		$scope.cat.count = 0;
		testFactory.cats.push($scope.cat);
		// $scope.cat = undefined;
		// $location.path('/view');

		console.log($scope);
	}
	$scope.validate = function(){
		console.log($scope);
	}
});