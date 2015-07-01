angular.module("app").directive("addCat", function () {
    return {
        templateUrl: "component/addCat/addCat.html",
        scope:{},
        replace: true,
        controller: 'addCatCtrl'
    };
});
