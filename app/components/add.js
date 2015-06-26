angular.module('app')
.controller('AddCtrl', function($scope, catsResource, $location) {
	var Cats = catsResource;
	$scope.submit = function(){
		$scope.cat.count = 0;
		Cats.save($scope.cat);
		$scope.cat = undefined;
		$location.path('/view');
	};
});