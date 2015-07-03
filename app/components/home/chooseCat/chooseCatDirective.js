angular.module("app").directive("chooseCat", function () {
    return {
        restrict: "AE",
        templateUrl: "components/home/chooseCat/chooseCat.html",
        replace: true,
        controller: 'chooseCatController',
        controllerAs: 'choose',
        bindToController: true,
        scope: {  	
        },
    };
});