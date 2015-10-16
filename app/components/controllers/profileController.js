(function(module) {

    var profileController = function ($scope, profile) {
        $scope.checkPassword = function(profile) {
            if (profile.password !== profile.repeatPassword) {
                $scope.newForm.$setValidity('checkPassword', false);
            } else {
                $scope.newForm.$setValidity('checkPassword', true);

            }
        };
        $scope.editFormCancel = function(event) {
            $scope.profile = null;
        };
        $scope.save = function(data) {
            profile.save(data);
        }
    };

    module.controller("profileController", profileController);

}(angular.module("app")));