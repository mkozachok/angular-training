angular.module("app").directive("imgPreview", function () {
    return {
        restrict: 'AE',
        templateUrl: "shared/imgPreview/imgPreview.html",
        scope:{
            name: '=name'
        },
        replace: true
    };
});
