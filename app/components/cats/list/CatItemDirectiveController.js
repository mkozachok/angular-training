catApp.controller('CatItemDirectiveController', function($state, catsService) {							  				
		var vm = this;		
	
		vm.click = function(cat){
			catsService.click(cat);
		};

		vm.remove = function(cat) {
			catsService.remove(cat);
			$state.reload();
		};
	});