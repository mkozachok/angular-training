(function(module) {

    var mainController = function ($scope, catsService, cats, authService) {
        $scope.sort = 'name';
        $scope.user = authService.getUser();
        $scope.cats = cats;
        $scope.showedCat = cats[0];

        $scope.catViewer = function(cat) {
            cat.viewed = true;
        };
        $scope.showCat = function(cat) {
            $scope.showedCat = cat;
            if (cat.likes > 0) {
                $scope.smile = ':)';
            } else if (cat.likes < 0) {
                $scope.smile = ':(';
            }
        };
        $scope.applySearch = function(data) {
            $scope.searchSrt = data;
        };
        $scope.deleteCat = function(event, cat) {
            event.preventDefault();
            catsService.delete(cat);
            $scope.cats = catsService.getCats();
            $scope.showedCat = cats[0];
        };
        $scope.$watch('cats', function(newVal, oldVal) {
            var happyCats = [];
            if (newVal) {
                newVal.forEach(function (cat) {
                    if (cat.likes > 0) {
                        happyCats.push(cat);
                    }
                });
                $scope.happyCats = happyCats;
            }
        }, true);
    };

    module.controller("mainController", mainController);

}(angular.module("app")));