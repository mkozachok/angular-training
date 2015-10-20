angular.module('app').directive('voteSpinner', function() {
    return {
        scope: {
            obj: '='
        },
        restrict: 'EA',
        templateUrl: '/templates/vote-spinner.html',
        controller: function($scope, profile) {
            if (profile.get()) {
                $scope.likesInc = function () {
                    $scope.obj.likes++;
                };
                $scope.likesDec = function () {
                    $scope.obj.likes--;
                };
            } else {
                $scope.loginErrorMsg = 'Please, login to vote.'
            }
        }
    };
});