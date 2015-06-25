angular.module('app').controller('addCatViewCtrl', function($scope, catService) {
	'use strict';
	
 	$scope.addCat = function(catName, catUrl) {
 		catService.addCat(catName, catUrl);
 		$scope.addcat.name = '';
		$scope.addcat.url = '';
 	};
					    	
});



