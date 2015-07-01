angular.module("app").directive("search", function () {
    return {
        templateUrl: "component/home/templates/searchCat.html",
        replace: true,
        scope: {},
        controller: 'SearchCatCtrl'
    };
});