angular.module("app").directive("search", function () {
    return {
        templateUrl: "home/templates/searchCat.html",
        replace: true,
        scope: {},
        controller: 'SearchCatCtrl'
    };
});