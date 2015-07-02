angular.module("app").controller("chooseCatController", function (notifyService) {
    var vm = this;
    // vm.selected = null;
    notifyService.listen('chooseCat', function(cat){
            vm.selected = cat;
            vm.selected.viewed = true;
            if(!vm.selected.voteCount){
                vm.selected.voteCount = 0;
            }
    });
    notifyService.listen('deleteCat', function(catId){
        if(catId == vm.selected.id){
            vm.selected = null;
        }
    });
    vm.increment = function(cat){
        cat.count++;
    };
});