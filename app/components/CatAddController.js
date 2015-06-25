catApp.controller('CatAddController', ['$scope', 'catsFactory',
	  function($scope, catsFactory) {
		$scope.addCat = function (cat){
			catsFactory.save({
					"id" : 4, 
					"name": cat.name, 
					"src": cat.src, 
					"count":0,
					"is_viewed":0,
					"votes":0
				 });
		};
	}]);