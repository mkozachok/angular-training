angular.module("app").directive("chose", function () {
    return {
        templateUrl: "templates/choseCat.html",
        replace: true,
        //scope: {},
        controller: 'ChoseCatCtrl'
    };
});