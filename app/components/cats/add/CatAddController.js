catApp.controller('CatAddController',
	  function($scope, catsService) {
		$scope.addCat = function (cat){
			cat.is_viewed = 0;
			catsService.save(cat);			
		};
});