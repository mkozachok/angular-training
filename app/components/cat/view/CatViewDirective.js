angular.module("app").directive("catView", function () {
    
    
    return {
        controller: "CatViewContoller",
        templateUrl: "components/cat/view/CatViewTemplate.html",
        replace: true
    };
    
    
});