(function(module) {

    var updateCatController = function ($scope, $location, catsService, newCat, authService) {
        $scope.title = 'Edit Cat'
        $scope.newCat = newCat;

        var user = authService.getUser();
        if (newCat  && newCat.owner != user.login) {
            $location.url('/');
        }


        $scope.editFormCancel = function(event) {
            $scope.newCat = null;
        };
        $scope.saveCat = function(cat) {
            catsService.updateCat(cat);
        }
    };

    module.controller("updateCatController", updateCatController);

}(angular.module("app")));