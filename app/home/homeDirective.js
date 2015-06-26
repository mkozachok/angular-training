angular.module("app").directive("home", function () {
    return {
        templateUrl: "templates/home.html",
        replace: true,
        controller: 'HomeCtrl',
        //bindToController: true,
        scope: {
            type: "="
        }
    };
});