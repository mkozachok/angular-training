angular.module("app").directive("search", function () {
    return {
        templateUrl: "templates/searchCat.html",
        replace: true,
        scope: {},
        controller: 'SearchCatCtrl'
    };
});