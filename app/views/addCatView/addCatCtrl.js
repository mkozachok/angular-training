angular.module('app').controller('addCatCtrl', function($scope, addCatService) {
	'use strict';
	var vm = this;
 	this.addCat = function(catName, catUrl) {
 		addCatService.addCat(catName, catUrl);
 		this.addcat.name = '';
		this.addcat.url = '';
 	};
					    	
});



