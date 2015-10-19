(function(module) {

    var loginController = function ($scope, profile) {
        $scope.login = function(user) {
            if(profile.login(user)) {
                $scope.user = null;
            }
        };
    };

    module.controller("loginController", loginController);

}(angular.module("app")));