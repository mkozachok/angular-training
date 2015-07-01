angular.module("app").directive("catsList", function () {
    return {
        restrict: "AE",
        templateUrl: "components/home/catsList/CatsList.html",
        replace: true,
        controller: "catsListController",
        controllerAs: "list",
        bindToController: true,
        scope: {},
    };
});