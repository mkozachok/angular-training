angular.module("app").controller("voteSpinnerController", function () {
	var vm = this;
	vm.vote = function(cat){
        cat.voteCount++;
    };
    vm.unvote = function(cat){
        cat.voteCount--;
    };
});