angular.module("app").directive("imgField", function () {
    return {
        restrict: "AE",
        templateUrl: "templates/imageField.html",
        replace: true,
        scope: {
        	name: "=name"
        },
    };
});