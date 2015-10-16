angular.module('app').directive('voteSpinner', function() {
    return {
        scope: {
            obj: '='
        },
        restrict: 'EA',
        templateUrl: '/templates/vote-spinner.html',
        controller: function($scope) {
            $scope.likesInc = function() {
                $scope.obj.likes++;
            };
            $scope.likesDec = function() {
                $scope.obj.likes--;
            };
        }
    };
});