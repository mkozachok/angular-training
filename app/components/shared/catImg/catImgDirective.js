app.directive('catImg', function () {
    return {
        restrict: "EA",
        scope: {
            model: "="
        },
        bindToController: true,
        controller: "CatImgCtrl",
        controllerAs: "vm",
        templateUrl: 'components/shared/catImg/catImg.html'
    };
});