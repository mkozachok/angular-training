// Declare app level module which depends on views, and components
angular.module('app', ['ngRoute', 'ngResource']);

angular.module('app').config(['$routeProvider', function($routeProvider) {
    'use strict';
	  $routeProvider.when('/addCat', {
	      templateUrl: 'views/addCatView/addCat.html',
	      controller: 'addCatViewCtrl'
  	});
  	$routeProvider.when('/home', {
        templateUrl: 'views/homeView/home.html',
        controller: 'homeCtrl'
    });
  	$routeProvider.otherwise({redirectTo: '/home'});
}]);



	





