angular.module("app").directive("chose", function () {
    return {
        templateUrl: "home/templates/choseCat.html",
        replace: true,
        //scope: {}, //@todo change to local scope
        controller: 'ChoseCatCtrl'
    };
});