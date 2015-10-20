angular.module('app').directive('loginPanel', function() {
    return {
        templateUrl: '/templates/login-panel.html',
        controller: function($scope, $location, profile) {
            var user = profile.get();
            $scope.user = user;

            $scope.logout = function() {
                $scope.user = null;
                profile.logout();
            }
        }
    };
});