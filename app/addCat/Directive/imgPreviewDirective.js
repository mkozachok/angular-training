angular.module("app").directive("imgPreview", function () {
    return {
        restrict: 'AE',
        templateUrl: "addCat/templates/imgPreview.html",
        scope:{
            name: '=name'
        },
        replace: true
    };
});
