angular.module("app").directive("addCat", function () {
    return {
        templateUrl: "templates/add_cat.html",
        scope:{},
        replace: true,
        controller: 'AddCatCtrl'
    };
});
