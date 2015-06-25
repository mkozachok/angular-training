'use strict';

angular.module('myApp.view', ['ngRoute', 'ngResource'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view', {
    templateUrl: 'view/view.html',
    controller: 'ViewCtrl'
  });
}])


.controller('ViewCtrl', function($scope, $filter, $resource, catsFactory) {
	var Cats = catsFactory;

    Cats.get(function (response) {
    	$scope.cats = response.cats;
    	$scope.filteredCats = $scope.cats;
    	$scope.selected = $scope.cats[0];
    });

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
		$scope.filteredCats = $filter('filter')($scope.cats, { name: substr });
	};
	$scope.startSearch = function(substr){
		if(substr.length > 2){
			$scope.search(substr);
		}
		else {
			$scope.filteredCats = $scope.cats;
		}
	};
});