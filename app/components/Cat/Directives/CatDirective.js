angular.module("app").directive("catDirective", function () {
    return {
    	restrict: 'EA',
        templateUrl: "templates/CatDirective.html",
        scope: {
        	cat: '='
        }
    };
});