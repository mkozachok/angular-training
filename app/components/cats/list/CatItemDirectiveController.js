catApp.controller('CatItemDirectiveController', function($state, catsService, indetityService) {							  				
		var vm = this;		
	
		vm.click = function(cat){
			catsService.click(cat);
		};

		vm.remove = function(cat) {
			if (indetityService.currentUser !== null){
				catsService.remove(cat);
				$state.reload();
			}
		};
	});