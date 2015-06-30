angular.module("app").directive("catsList", function () {
    return {
        restrict: "AE",
        templateUrl: "templates/list.html",
        replace: true,
        controller: 'ListCtrl',
        controllerAs: 'list',
        bindToController: true,
        scope: {},
    };
});