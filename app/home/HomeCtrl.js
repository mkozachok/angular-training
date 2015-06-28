var app = angular.module('app');

    app.controller('HomeCtrl', ['$scope','promiseObj', function($scope, promiseObj) {
        'use strict';
        $scope.cats = [];

        //resource.get().$promise.then(function (response) {
        //    cats = response;
        //    $scope.cats = cats.cats;
        //});

        $scope.cats = promiseObj.cats;
        $scope.broadcast = function() {
            $scope.$broadcast('broadToChild', $scope.toChild);
        };

        $scope.$on('emitFromChild', function(event, fromChild) {
            $scope.cats = fromChild;
        });
    }]);
