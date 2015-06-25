'use strict';

angular.module('myApp.add', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add', {
    templateUrl: 'add/add.html',
    controller: 'AddCtrl'
  });
}])

.controller('AddCtrl', function($scope, catsFactory, $location) {
	var Cats = catsFactory;
	$scope.submit = function(){
		$scope.cat.count = 0;
		Cats.save($scope.cat);
		$scope.cat = undefined;
		$location.path('/view');

	}

});