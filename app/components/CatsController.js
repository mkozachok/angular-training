catApp.controller('CatsController', function($scope, catsStorage) {							  				
		var vm = this;		

		vm.CatFilter = {Value :'', OrderBy:'name'};		
		
		vm.filter = function (flt) {
			catsStorage.get().then(function (cats) {
				vm.filteredCats = catsStorage.filter(cats, flt);
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
			catsStorage.click(cat);
		};	
		
		vm.updateVote = function (cat, direction){
			catsStorage.vote(cat, direction);
		};	
	});