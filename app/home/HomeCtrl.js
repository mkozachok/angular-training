var app = angular.module('app');

    app.controller('HomeCtrl', ['$scope','$resource', 'promiseObj', function($scope, $resource, promiseObj) {
        'use strict';
        $scope.cats = [];

        //resource.get().$promise.then(function (response) {
        //    cats = response;
        //    $scope.cats = cats.cats;
        //});

        $scope.cats = promiseObj;

        $scope.broadcast = function() {
            $scope.$broadcast('broadToChild', $scope.toChild);
        };

        $scope.$on('emitFromChild', function(event, fromChild) {
            $scope.cats = fromChild;
        });
    }]);
