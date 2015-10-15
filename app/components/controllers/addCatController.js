(function(module) {

    var addCatController = function ($scope) {
        //$scope.newCat = {};
        $scope.editFormCancel = function(event) {
            $scope.newCat = null;
        }
    };

    module.controller("addCatController", ['$scope', addCatController]);

}(angular.module("app")));