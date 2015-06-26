catApp.controller('CatItemDirectiveController', function($scope, catsService) {							  				
		var vm = this;		
	
		vm.updateVote = function(cat, direction){
			catsService.vote(cat, direction);
		};

		vm.click = function(cat){
			catsService.click(cat);
		};
	});