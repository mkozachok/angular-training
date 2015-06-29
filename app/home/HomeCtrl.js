var app = angular.module('app');

    app.controller('HomeCtrl', ['$scope', 'promiseObj', '$cookieStore', function($scope, promiseObj,  $cookieStore) {
        'use strict';
        $scope.cats = [];
        $scope.userActive = 0;
        $scope.userName = '';

        //  console.log(111, AuthenticationService.getUser());
        var userCookie = $cookieStore.get('user');
        if(userCookie){
            $scope.userActive = 1;
            $scope.userName = userCookie;
        }

        $scope.cats = promiseObj.cats;
        $scope.broadcast = function() {
            $scope.$broadcast('broadToChild', $scope.toChild);
        };

        $scope.$on('emitFromChild', function(event, fromChild) {
            $scope.cats = fromChild;
        });
    }]);
