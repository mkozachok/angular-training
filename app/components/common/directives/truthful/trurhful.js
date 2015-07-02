__mainApp
.directive("truthFul", function () {
    return {
        restrict: "AE",
        templateUrl: "templates/common/directives/truthful.html",
        replace: true,
        controller: 'TruthfulCtrl',
        controllerAs: 'thruthful',
        bindToController: true,
        scope: {
            'data':'='
        },
    };
});