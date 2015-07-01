angular.module("app").directive("addCat", function () {
    return {
        templateUrl: "addCat/templates/addCat.html",
        scope:{},
        replace: true,
        controller: 'addCatCtrl'
    };
});
