angular.module("app").controller("voteSpinnerController", function (profileService) {
	var vm = this;
	vm.loggedUsername = profileService.getLoggedUsername();
	vm.vote = function(cat){
		if(cat.votedUsernames.indexOf(vm.loggedUsername) === -1){
        	cat.voteCount++;
        	cat.votedUsernames.push(vm.loggedUsername);
    	}
    };
    vm.unvote = function(cat){
    	if(cat.votedUsernames.indexOf(vm.loggedUsername) === -1){
        	cat.voteCount--;
        	cat.votedUsernames.push(vm.loggedUsername);
    	}
    };
});