//todo: implements perms service

(function(module) {

    var mainController = function ($scope, $uibModal, catsService, cats, authService, permsService) {
        $scope.sort = 'name';

        $scope.user = authService.getUser();

        $scope.cats = cats.sort(function(a, b){
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
        });

        $scope.showedCat = cats[0];

        $scope.catViewer = function(cat) {
            cat.viewed = true;
        };
        $scope.applySearch = function(data) {
            $scope.searchSrt = data;
        };
        $scope.deleteCat = function(cat) {
            if (permsService.isCatOwner(cat)) {
                catsService.delete(cat);
                $scope.cats = catsService.getCats();
                $scope.showedCat = cats[0];
            }
        };
        $scope.likeCat = function(cat) {
            catsService.like(cat);
        };
        $scope.showCat = function(cat) {
            $scope.showedCat = cat;
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

        $scope.isOwner = function(cat) {
           return permsService.isCatOwner(cat);
        };


        $scope.deleteConfirm = function (cat) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'templates/modal-delete-confirm.html',
                controller: 'ModalInstanceController',
                resolve: {
                    cat: function () {
                        return cat;
                    }
                }
            });

            modalInstance.result.then(function (cat) {
                $scope.deleteCat(cat);
            }, function () {
                //canceling...
            });
        };

    };

    module.controller("mainController", mainController);

}(angular.module("app")));