app.controller('CatDetailsCtrl', function ($scope, catService) {

    var self = this;
    this.sel = catService.selectedCat;

    $scope.$on('updateSelectedCat', function () {
        $scope.$applyAsync(function () {
            self.sel = catService.selectedCat;

        });
    });

    $scope.Click = function (clicks) {
        catService.selectedCat.clicks++;
    };

});