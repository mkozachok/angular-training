//'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  //'myApp.homeView',
  //'myApp.catView',
  //'myApp.addCatView',
  'ngResource'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/addCat', {
	    templateUrl: 'views/addCatView/addCat.html',
	    controller: 'addCatViewCtrl'
  	});
  	$routeProvider.when('/home', {
         templateUrl: 'views/homeView/home.html',
         controller: 'HomeViewCtrl'
    });
  	$routeProvider.otherwise({redirectTo: '/home'});
}]);



	





