(function(module) {

    var addCatController = function ($scope, $location, catsService, authService) {
        if (!authService.isLoggedIn()) {
            $location.url('/');
        }

        $scope.title = 'Add Cat';

        $scope.editFormCancel = function(event) {
            $scope.newCat = null;
        };
        $scope.saveCat = function(cat) {
            catsService.save(cat);
            $location.url('/');
        };
    };

    module.controller("addCatController", addCatController);

}(angular.module("app")));