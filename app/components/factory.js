angular.module('app').factory('catsResource', function($resource){
	return {
	    	getCats: $resource('/cats/'),
	    	putCat: $resource('/cats/'),
	    	delCat: $resource('/cats/:catId', {catId:'@id'})
	    };         
});
