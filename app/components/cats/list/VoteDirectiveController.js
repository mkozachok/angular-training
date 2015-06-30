catApp.controller('VoteDirectiveController', function (catsService) {
	var vm = this;

	vm.updateVote = function(cat, direction){
		catsService.vote(cat, direction);
	};
});