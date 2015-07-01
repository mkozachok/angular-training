angular.module("app").controller("chooseCatController", function (notifyService) {
    var vm = this;
    vm.selected = null;
    notifyService.listen('chooseCat', function(cat){
        vm.selected = cat;
        vm.selected.viewed = true;
        if(!vm.selected.voteCount){
            vm.selected.voteCount = 0;
        }
    });
    vm.increment = function(cat){
        cat.count++;
    };
    vm.voteIncrement = function(cat){
        cat.voteCount++;
    };
    vm.voteDecrement = function(cat){
        cat.voteCount--;
    };
});