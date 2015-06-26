catApp.controller('CatAddController',
	  function($scope, catsService) {
		$scope.addCat = function (cat){
			catsService.save(cat);			
		};
});