 'use strict';


// Declare app level module which depends on views, and components
var __mainApp = angular.module('app', [
   'ngRoute'
   ,'ngResource'
]).
config(['$routeProvider', function($routeProvider) {
	console.log('route provider');
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

