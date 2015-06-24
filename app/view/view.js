'use strict';

angular.module('myApp.view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view', {
    templateUrl: 'view/view.html',
    controller: 'ViewCtrl'
  });
}])


.controller('ViewCtrl', function($scope, testFactory) {
	$scope.cats = testFactory.cats;
	$scope.selected = $scope.cats[0];
	$scope.select = function(cat){
		$scope.selected = cat;
		$scope.selected.viewed = true;
		if(!$scope.selected.voteCount){
			$scope.selected.voteCount = 0;
		}
	};
	$scope.increment = function(cat){
		cat.count++;
	};
	$scope.selected.voteCount = 0;
	$scope.voteIncrement = function(cat){
		cat.voteCount++;
	};
	$scope.voteDecrement = function(cat){
		cat.voteCount--;
	};
	$scope.sorting = 'asc';
	$scope.sort = function(){
		if($scope.sorting == 'asc'){
			$scope.reverse = false;
		}else{
			$scope.reverse = true;
		}
	};
	$scope.search = function(substr){
		$scope.neededCat = substr;
	};
	$scope.startSearch = function(substr){
		if(substr.length > 2){
			$scope.search(substr);
		}
	};

	// console.log($scope);
});