(function(module) {

    var addCatController = function ($scope, $location, catsService, authService) {
        if (!authService.getUser()) {
            $location.url('/');
        }

        $scope.title = 'Add Cat'

        $scope.editFormCancel = function(event) {
            $scope.newCat = null;
        };
        $scope.saveCat = function(cat) {
            catsService.save(cat);
        }
    };

    module.controller("addCatController", addCatController);

}(angular.module("app")));