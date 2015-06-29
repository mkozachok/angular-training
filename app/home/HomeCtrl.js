var app = angular.module('app');

    app.controller('HomeCtrl', ['$scope', 'promiseObj', 'AuthenticationService',function($scope, promiseObj, AuthenticationService) {
        'use strict';
        $scope.cats = [];
        $scope.userActive = 0;
        $scope.userName = '';

        //  console.log(111, AuthenticationService.getUser());
        if(AuthenticationService.getUser()){
            $scope.userActive = 1;
            $scope.userName = AuthenticationService.getUser();
        }

        $scope.cats = promiseObj.cats;
        $scope.broadcast = function() {
            $scope.$broadcast('broadToChild', $scope.toChild);
        };

        $scope.$on('emitFromChild', function(event, fromChild) {
            $scope.cats = fromChild;
        });
    }]);
