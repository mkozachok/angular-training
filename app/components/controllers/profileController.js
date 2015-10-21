(function(module) {

    var profileController = function ($scope, profile, authService) {
        $scope.checkPassword = function(profile) {
            if (profile.password !== profile.password2) {
                $scope.newForm.$setValidity('checkPassword', false);
            } else {
                $scope.newForm.$setValidity('checkPassword', true);

            }
        };
        $scope.editFormCancel = function(event) {
            $scope.profile = null;
        };
        $scope.save = function(data) {
            //profile.save(data);
            authService.register(data);
        }
    };

    module.controller("profileController", profileController);

}(angular.module("app")));