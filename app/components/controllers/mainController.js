(function(module) {

    var mainController = function ($scope, catsService, cats, authService) {
        var showListOfCats = function() {
            $scope.cats = cats;
            $scope.showedCat = cats[0];
        };
        showListOfCats();
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
        $scope.sort = 'name';
        $scope.applySearch = function(data) {
            $scope.searchSrt = data;
        };
        $scope.deleteCat = function(event, cat) {
            event.preventDefault();
            catsService.delete(cat);
            showListOfCats();
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
        $scope.user = authService.getUser();
    };

    module.controller("mainController", mainController);

}(angular.module("app")));