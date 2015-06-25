catApp.controller('CatsController', function($scope, catsService) {							  				
		var vm = this;		

		vm.CatFilter = {Value :'', OrderBy:'name'};		
		
		vm.filter = function (flt) {
			catsService.get().then(function (cats) {
				vm.filteredCats = catsService.filter(cats, flt);
			});
		};
		
		vm.filter(vm.CatFilter);
			
		$scope.$watch(
			function() { 
					return vm.CatFilter.OrderBy;
				},
			function(newValue, oldValue) {
				if (newValue !== oldValue)
				  vm.filter(vm.CatFilter);
            }
		);

		vm.click = function(cat) {
			catsService.click(cat);
		};	
		
		vm.updateVote = function (cat, direction){
			catsService.vote(cat, direction);
		};	
	});