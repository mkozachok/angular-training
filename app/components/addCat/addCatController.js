angular.module('app')
.controller('addCatController', function($scope, catsResource, $location, profileService) {
	$scope.cat = { 
		"count" : undefined,
		"id" : undefined,
		"username" : undefined,
		"votedUsernames" : []
	};
	var lastId;
	catsResource.get(function (result) {
        lastId = result.lastId;
    });
	$scope.submit = function(){
		$scope.cat.username = profileService.getLoggedUsername();
		$scope.cat.count = 0;
		$scope.cat.id = ++lastId;
		catsResource.save($scope.cat);
		$location.path('/view');
	};

	// $resource('/test/:catId?', {catId:'@catId'}).get();
});