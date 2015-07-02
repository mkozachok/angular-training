angular.module("app").directive("voteSpinner", function () {
    return {
        restrict: "AE",
        templateUrl: "shared/directives/voteSpinner/voteSpinner.html",
        replace: true,
        controller: "voteSpinnerController",
        controllerAs: "spinner",
        bindToController: true,
        scope: {
        	element: "=element"
        },
    };
});