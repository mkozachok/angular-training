angular.module('app')
.controller('ViewCtrl', function($scope, $filter, catsResource) {
	// var Cats = catsResource;
	//$scope.selected = null;
    // Cats.get(function (response) {
    // 	$scope.cats = response.cats;
    // 	$scope.filteredCats = $scope.cats;
    // 	$scope.select($scope.cats[0]);
    // });
// console.log($scope);
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
		console.log($scope);
		$scope.list.filteredCats = $filter('filter')($scope.list.cats, { name: substr });
	};
	$scope.startSearch = function(substr){
		if(substr.length > 2){
			$scope.search(substr);
		}
		else {
			$scope.list.filteredCats = $scope.list.cats;
		}
	};
});