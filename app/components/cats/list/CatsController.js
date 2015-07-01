catApp.controller('CatsController', function($scope, catsService) {							  				
		var vm = this;

		vm.CatFilter = {Value :'', OrderBy:'name'};		
		
		vm.filter = function (flt) {
			catsService.all().then(function (cats) {
				vm.filteredCats = catsService.filter(cats, flt);
			});
		};
		
		vm.filteredCats = catsService.filter($scope.readyCats, vm.CatFilter);
			
		$scope.$watch(
			function() { 
					return vm.CatFilter.OrderBy;
				},
			function(newValue, oldValue) {
				if (newValue !== oldValue)
				  vm.filter(vm.CatFilter);
            }
		);
	});