angular.module("app").directive("preview", function () {
    return {
        restrict: 'AE',
        templateUrl: "templates/imgPreview.html",
        scope:{
            name: '=name'
        },
        replace: true
    };
});
