catApp.controller('CatItemDirectiveController', function($scope, $state, catsService) {							  				
		var vm = this;		
	
		vm.updateVote = function(cat, direction){
			catsService.vote(cat, direction);
		};

		vm.click = function(cat){
			catsService.click(cat);
		};

		vm.remove = function(cat) {
			catsService.remove(cat);
			$state.reload();
		};
	});