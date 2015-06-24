(function () {

	'use strict';

	var app = angular.module('myApp.homeView', ['ngRoute']);

	app.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/home', {
	    templateUrl: 'views/homeView/home.html',
	    controller: 'HomeViewCtrl'
	  });
	}]);

	app.controller('HomeViewCtrl', function($scope, catsFactory, $filter) {
		
		$scope.catsFactory = catsFactory;
		$scope.cats = catsFactory.cats;
		//$scope.selectedCat = $scope.cats[0];
		$scope.clickedCat = false;
		$scope.selectedCat = catsFactory.selectedCat;
		$scope.catsFiltered = $scope.cats;
		$scope.searchText = '';

		$scope.myOptions = ['name DESC', 'name ASC', 'likes'];
		//$scope.selectedCat.likes = 0;
		//catsFactory.cats.likes = 0;
		//$scope.cats.likes = 0;

		$scope.myCount = function(cat) {
			cat.clicks ++;
		};

		$scope.showCat = function(cat) {
			//catsFactory.selectedCat = cat;
			cat.viewed = true;
			catsFactory.selectedCat = cat;
			//$scope.selectedCat = cat;
		};

		$scope.likeCat = function(cat) {
			//$scope.cats.likes++;
			cat.likes++;
		};

		$scope.dislikeCat = function(cat) {
			//$scope.cats.likes--;
			cat.likes--;
		};

		$scope.change = function(){
			//console.log($scope.sortMethod);
			if ($scope.sortMethod == $scope.myOptions[0]) {
				//console.log("0");
				$scope.catsFiltered = $filter('orderBy')($scope.cats, '-name');
			}
			else if ($scope.sortMethod == $scope.myOptions[1]) {
				//console.log("1");
				$scope.catsFiltered = $filter('orderBy')($scope.cats, 'name');
			}
			else if ($scope.sortMethod == $scope.myOptions[2]) {
				//console.log("2");
				$scope.catsFiltered = $filter('orderBy')($scope.cats, '-likes');
			}

		};

		$scope.performSearch = function(searchText) {
        	$scope.catsFiltered = $filter('filter')($scope.cats, $scope.search);
    	};

	    $scope.search = function (item){
	        if ($scope.searchText.length < 3) {
	        	console.log($scope.searchText.length);
	            return true;
	        }

	        if (item.name.toLowerCase().indexOf($scope.searchText)!=-1 ) {

	            return true;
	        }
	        return false;
	    };



	});

})();