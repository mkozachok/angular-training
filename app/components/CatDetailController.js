catApp.controller('CatDetailController', function($scope, $stateParams, catsResource) {
	  	onCreate();
				
		$scope.click = function (cat){
			cat.count++;
			catsResource.update(cat);
		};		

		function onCreate(){
			// select cat by id
			var catId = parseInt($stateParams.id);		

			$scope.current = catsResource.get({id : catId});
		}
	});
	