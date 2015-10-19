(function(module) {

    var updateCatController = function ($scope, cats, newCat) {
        $scope.title = 'Edit Cat'

        $scope.newCat = newCat;

        $scope.editFormCancel = function(event) {
            $scope.newCat = null;
        };
        $scope.saveCat = function(cat) {
            cats.updateCat(cat);
        }
    };

    module.controller("updateCatController", updateCatController);

}(angular.module("app")));