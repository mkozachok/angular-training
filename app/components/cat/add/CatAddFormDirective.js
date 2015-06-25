angular.module("app").directive("catAddForm", function () {
    
    
    return {
        controller: "CatAddFormContoller",
        templateUrl: "components/cat/add/CatAddFormTemplate.html",
        replace: true
    };
    
    
});