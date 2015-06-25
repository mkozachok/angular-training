catApp.controller('CatDetailController', ['$scope', '$stateParams', 'catsFactory',
	  function($scope, $stateParams, catsFactory) {
	  	onCreate();
				
		$scope.click = function (cat){
			cat.count++;
			catsFactory.update(cat);
		};		

		function onCreate(){
			// select cat by id
			var catId = parseInt($stateParams.id);		

			$scope.current = catsFactory.get({id : catId});
		}
	}]);
	