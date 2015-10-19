angular.module('app').directive('loginPanel', function() {
    return {
        templateUrl: '/templates/login-panel.html',
        controller: function($scope, profile) {
            var user = profile.get();
            $scope.user = user;
        }
    };
});