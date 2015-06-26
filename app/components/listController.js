angular.module("app").controller("ListController", function ($scope, catsResource) {
    var vm = this;
    console.log(vm);
    catsResource.get().$promise.then(function (result) {
        vm.filteredCats = result.cats;
        vm.cats = result.cats;
        $scope.selected = result.cats[0];
        $scope.selected.voteCount = 0;
    });
});