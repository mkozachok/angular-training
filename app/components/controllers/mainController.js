(function(module) {

    var mainController = function ($scope, cats, profile) {
        var showListOfCats = function() {
            $scope.cats = cats;
        }
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
            cats.delete(cat);
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
        $scope.user = profile.get();
    };

    module.controller("mainController", mainController);

}(angular.module("app")));