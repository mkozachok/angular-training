angular.module("app").directive("catList", function () {
    
    
    return {
        controller: "CatListContoller",
        templateUrl: "components/cat/list/CatListTemplate.html",
        replace: true
    };
    
    
});