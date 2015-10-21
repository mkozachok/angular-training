angular.module('app').directive('voteSpinner', function () {
    return {
        scope: {
            obj: '='
        },
        restrict: 'EA',
        templateUrl: '/templates/vote-spinner.html',
        controller: function ($scope, authService, catsService) {
            if (authService.getUser()) {
                $scope.likesInc = function () {
                    $scope.obj.likes++;
                    catsService.updateCat($scope.obj);
                };
                $scope.likesDec = function () {
                    $scope.obj.likes--;
                    catsService.updateCat($scope.obj);
                };
            } else {
                $scope.loginErrorMsg = 'Please, login to vote.'
            }
        }
    };
});