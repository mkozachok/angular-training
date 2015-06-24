(function () {

	'use strict';

	var app = angular.module('myApp.addCatView', ['ngRoute']);

	app.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/addCat', {
	    templateUrl: 'views/addCatView/addCat.html',
	    controller: 'addCatViewCtrl'
	  });
	}]);

	app.controller('addCatViewCtrl', function($scope, catsFactory) {
			
		$scope.catsFactory = catsFactory;
		$scope.cats = catsFactory.cats;

		$scope.addCat = function(catName, catUrl) {
			var cat = {  name: catName, img: catUrl, clicks: 0, likes: 0 }; 	
			$scope.cats.push(cat);
			$scope.addcat.name = '';
			$scope.addcat.url = '';
		};								
		    	
	});

})();