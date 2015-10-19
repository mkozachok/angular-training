(function(module) {

    var addCatController = function ($scope, cats) {
        $scope.title = 'Add Cat'

        $scope.editFormCancel = function(event) {
            $scope.newCat = null;
        };
        $scope.saveCat = function(cat) {
            cats.addCats(cat);
        }
    };

    module.controller("addCatController", addCatController);

}(angular.module("app")));