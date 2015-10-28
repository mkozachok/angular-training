(function(module) {

    var loginController = function ($scope, $location, $q, profile, authService) {
        $scope.login = function(user) {
			
			var log = authService.login;

            log($scope.user).then(function(user) {
                $location.url('/');
            }).catch(function(error) {
					$scope.loginError = 'You enter wrong login or password.';
				}
			);

        };
    };

    module.controller("loginController", loginController);

}(angular.module("app")));