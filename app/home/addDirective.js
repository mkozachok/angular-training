angular.module("app").directive("addCat", function () {
    return {
        templateUrl: "templates/add_cat.html",
        replace: true,
        controller: 'AddCatCtrl'
    };
});
