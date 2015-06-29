angular.module("app").directive("chooseCat", function () {
    return {
        restrict: "AE",
        templateUrl: "templates/chooseCat.html",
        replace: true,
        controller: 'chooseCatController',
        controllerAs: 'choose',
        bindToController: true,
        scope: true,
    };
});