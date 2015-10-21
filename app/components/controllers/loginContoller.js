(function(module) {

    var loginController = function ($scope, $location, profile, authService) {
        $scope.login = function(user) {
            authService.login(user);
            $location.url('/');
        };
    };

    module.controller("loginController", loginController);

}(angular.module("app")));