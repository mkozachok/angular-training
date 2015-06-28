var app = angular.module('app');

    app.controller('HomeCtrl', ['$scope', 'AuthenticationService', 'promiseObj', function($scope, AuthenticationService, promiseObj) {
        'use strict';
        $scope.cats = [];

        $scope.userName = 'No name';
        console.log(111, AuthenticationService.getUser());
        if(AuthenticationService.getUser())
            $scope.userName = AuthenticationService.getUser();


        $scope.cats = promiseObj.cats;
        $scope.broadcast = function() {
            $scope.$broadcast('broadToChild', $scope.toChild);
        };

        $scope.$on('emitFromChild', function(event, fromChild) {
            $scope.cats = fromChild;
        });
    }]);
