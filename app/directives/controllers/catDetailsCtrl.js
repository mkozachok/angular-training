app.controller('CatDetailsCtrl', function ($scope, catService) {
    
    $scope.sel = catService.selectedCat;

    $scope.Click = function (clicks) {
        catService.selectedCat.clicks++;
    };

    $scope.Like = function () {
        catService.selectedCat.likes++;
    };

    $scope.Dislike = function () {
        catService.selectedCat.likes--;
    };

});