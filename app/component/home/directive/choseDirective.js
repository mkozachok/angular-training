angular.module("app").directive("chose", function () {
    return {
        templateUrl: "component/home/templates/choseCat.html",
        replace: true,
        //scope: {}, //@todo change to local scope
        controller: 'ChoseCatCtrl'
    };
});