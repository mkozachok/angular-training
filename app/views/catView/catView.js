(function () {
	'use strict';

	var app = angular.module('myApp.catView', ['ngRoute']);

	app.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/cat', {
	    templateUrl: 'views/catView/cat.html',
	    controller: 'View1Ctrl'
	  });
	}]);

	app.controller('View1Ctrl', [function() {

	}]);

})();