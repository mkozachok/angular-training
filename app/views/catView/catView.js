
	//'use strict';

	//var app = angular.module('myApp.catView', ['ngRoute']);

	angular.module('app').config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/cat', {
	    templateUrl: 'views/catView/cat.html',
	    controller: 'View1Ctrl'
	  });
	}]);

	angular.module('app').controller('View1Ctrl', [function() {

	}]);

