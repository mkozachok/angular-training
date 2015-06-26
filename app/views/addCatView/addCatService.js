angular.module('app').service( 'addCatService', ['catsFactory', function(catsFactory) {
	'use strict';

    var service = {
	    addCat: function (catName, catUrl) {
	    	var cat = { "id": '', "name": catName, "img": catUrl, "clicks": 0, "likes": 0 };  	
	       	catsFactory.getCats.save(cat);
	    }
  	};

  	return service;
   	
}]);