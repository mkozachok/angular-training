angular.module("app").directive("list", function () {
    return {
        restrict: "AE",
        templateUrl: "templates/list.html",
        replace: true,
        controller: 'ListController',
        controllerAs: 'list',
        bindToController: true,
        // scope: {
        //     type: "=masterType"
        // },
        transclude: true,
        // require: "^?ngApp"
    };
});