(function(){
	"use strict";

	var module = angular.module('debug.exceptions', []);

	module.config(function($provide) {
	    $provide.decorator("$exceptionHandler", ['$delegate', function($delegate) {
	        return function(exception, cause) {
	        	console.log(exception.message);
	            $delegate(exception, cause);
	        };
	    }]);
	});
})();