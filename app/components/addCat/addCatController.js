angular.module('app')
.controller('addCatController', function($scope, catsResource, $location) {
	$scope.cat = { 
		"count" : undefined,
		"id" : undefined
	};
	var lastId;
	catsResource.get(function (result) {
        lastId = result.lastId;
    });
	$scope.submit = function(){
		$scope.cat.count = 0;
		$scope.cat.id = ++lastId;
		catsResource.save($scope.cat);
		$location.path('/view');
	};

	// $resource('/test/:catId?', {catId:'@catId'}).get();
});