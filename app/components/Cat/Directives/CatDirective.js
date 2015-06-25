angular.module("app").directive("catDirective", function () {
    return {
    	restrict: 'EA',
        templateUrl: "templates/Cat.html",
        scope: {
        	cat: '='
        }
    };
});