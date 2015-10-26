angular.module('directives').directive('voteSpinner', function () {
    return {
        scope: {
            obj: '=',
            update: '&'
        },
        restrict: 'EA',
        templateUrl: '/templates/vote-spinner.html',
        controller: function ($scope, authService) {
            if (authService.getUser()) {
                var user = authService.getUser(),
                    updateLikes = function (obj, one) {
                        obj.likers = obj.likers || {};
                        obj.likers[user.login] = obj.likers[user.login] || null;
                        if (obj.likers[user.login] || obj.likers[user.login] === 0) {
                            if ((obj.likers[user.login] < one && one > 0) || (obj.likers[user.login] > one && one < 0)) {
                                obj.likers[user.login] += one;
                                obj.likes += one;
                            }
                        } else {
                            obj.likers[user.login] = one;
                            obj.likes += one;
                        }
                        $scope.update({'cat': obj});
                    };
                $scope.likesInc = function () {
                    updateLikes($scope.obj, 1);
                };
                $scope.likesDec = function () {
                    updateLikes($scope.obj, -1);
                };
            } else {
                $scope.loginErrorMsg = 'Please, login to vote.';
            }
        }
    };
});