angular.module('app').directive('voteSpinner', function () {
    return {
        scope: {
            obj: '=',
            update: '&'
        },
        restrict: 'EA',
        templateUrl: '/templates/vote-spinner.html',
        controller: function ($scope, authService) {
            if (authService.getUser()) {
                $scope.likesInc = function () {
                    var user = authService.getUser();//todo
                    $scope.obj.likers = $scope.obj.likers || {};
                    $scope.obj.likers[user.login] = $scope.obj.likers[user.login] || null;
                    if ($scope.obj.likers[user.login] || $scope.obj.likers[user.login] === 0) {
                        if ($scope.obj.likers[user.login] < 1) {
                            $scope.obj.likers[user.login] +=1;
                            $scope.obj.likes++;
                        }
                    } else {
                        $scope.obj.likers[user.login] = 1;
                        $scope.obj.likes++;
                    }
                    $scope.update({'cat' : $scope.obj});
                };
                $scope.likesDec = function () {
                    var user = authService.getUser();//todo
                    $scope.obj.likers = $scope.obj.likers || {};
                    $scope.obj.likers[user.login] = $scope.obj.likers[user.login] || null;
                    if ($scope.obj.likers[user.login] || $scope.obj.likers[user.login] === 0) {
                        if ($scope.obj.likers[user.login] > -1) {
                            $scope.obj.likers[user.login] -=1;
                            $scope.obj.likes--;
                        }
                    } else {
                        $scope.obj.likers[user.login] = -1;
                        $scope.obj.likes--;
                    }
                    $scope.update({'cat' : $scope.obj});
                };
            } else {
                $scope.loginErrorMsg = 'Please, login to vote.'
            }
        }
    };
});