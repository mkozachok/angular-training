(function () {
	
	'use strict';

	// Declare app level module which depends on views, and components
	var app = angular.module('myApp', [
	  'ngRoute',
	  'myApp.homeView',
	  //'myApp.catView',
	  'myApp.addCatView',
	  'ngResource'
	]).
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.otherwise({redirectTo: '/home'});
	}]);

	app.factory('catsFactory', function() {
	  	var cats = [
			{  name: "First cat", img: "img/cat.jpg", clicks: 0, likes: 0 }, 
			{  name: "Second cat", img: "img/cat2.jpg", clicks: 0, likes: 0  },
			{  name: "Third cat", img: "img/cat3.jpg", clicks: 0, likes: 0  }, 
			{  name: "Fourth cat", img: "img/cat4.jpg", clicks: 0, likes: 0  },
			{  name: "Fifth cat", img: "img/cat5.jpg", clicks: 0, likes: 0  }, 
			{  name: "Six cat", img: "img/cat6.jpg", clicks: 0, likes: 0  }
		];

	  	return {
		    cats: cats,
		    selectedCat: cats[0]
		    
		};

	});

})();


