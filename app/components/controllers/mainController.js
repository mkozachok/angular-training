(function(module) {

    var mainController = function ($scope, cats, profile) {
        var showListOfCats = function() {
            cats.getCats().then(function (data) {
                $scope.cats = data;
                $scope.showedCat = $scope.cats[0];
            }, function (error) {
                console.log(error.statusText);
            });
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
        $scope.applySearch = function(data) {
            $scope.searchSrt = data;
        };
        $scope.deleteCat = function(cat) {
            cats.delete(cat);
            showListOfCats();
        }
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

        $scope.login = function(user) {
            if(profile.login(user)) {
                $scope.user = null;
            }
        };
    };

    module.controller("mainController", mainController);

}(angular.module("app")));