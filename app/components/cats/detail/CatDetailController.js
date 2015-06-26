catApp.controller('CatDetailController', function($scope, $stateParams, catsService) {
	  	onCreate();
				
		$scope.click = function (cat){
			cat.count++;
			catsService.update(cat);
		};		

		function onCreate(){
			// select cat by id
			var catId = parseInt($stateParams.id);
			catsService.one(catId).then(function(cat){
				cat.is_viewed = 1;
				catsService.update(cat);
				$scope.current = cat;
			});
		}
	});
	