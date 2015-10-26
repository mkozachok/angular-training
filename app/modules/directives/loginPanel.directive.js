angular.module('directives').directive('loginPanel', function() {
    return {
        templateUrl: '/templates/login-panel.html',
        controller: function($scope, $location, authService) {
            $scope.logout = function() {
                $scope.user = null;
                authService.logout();
            };

            $scope.$watch(authService.getUser, function(user) {
                $scope.user = user;
            });
        }
    };
});