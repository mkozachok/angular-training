(function(module) {

    var mainController = function ($scope, cats) {
        $scope.cats = cats;
        $scope.showedCat = $scope.cats[0];
        $scope.likesInc = function(cat) {
            cat.likes++;
        };
        $scope.likesDec = function(cat) {
            cat.likes--;
        };
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
        $scope.$watch('cats', function(newVal, oldVal) {
            var happyCats = [];
            newVal.forEach(function(cat) {
                if (cat.likes > 0) {
                    happyCats.push(cat);
                }
            });
            $scope.happyCats = happyCats;
        }, true);
    };

    module.controller("mainController", mainController);

}(angular.module("app")));