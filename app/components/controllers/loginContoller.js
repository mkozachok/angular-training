(function(module) {

    var loginController = function ($scope, $location, $q, profile, authService) {
        $scope.login = function(user) {
            var deferred = $q.defer();

            authService.login(user).then(function(data) {
                $location.url('/');
            }, function() {
                $scope.loginError = 'You enter wrong login or password.';
            });

        };
    };

    module.controller("loginController", loginController);

}(angular.module("app")));