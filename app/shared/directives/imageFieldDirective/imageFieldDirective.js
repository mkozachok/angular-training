angular.module("app").directive("imageField", function () {
    return {
        restrict: "AE",
        templateUrl: "shared/directives/imageFieldDirective/imageField.html",
        replace: true,
        scope: {
        	name: "=name"
        },
    };
});