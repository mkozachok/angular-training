angular.module('app').factory('catsFactory', ['$resource', function($resource) {
	'use strict';
	var cats = $resource('/cats');
	return {
		getCats: cats
	};	    
}]);
//https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQB0-BohEAA65R4Bnin4aCRDE0lovGdZrt2G3JyVBA2ZaIKAbUxuw