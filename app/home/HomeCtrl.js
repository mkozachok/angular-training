var app = angular.module('app');

    app.controller('HomeCtrl', ['$scope','$resource', 'KittyFactory', 'promiseObj', function($scope, $resource, KittyFactory, promiseObj) {
        'use strict';
        var resource = KittyFactory;
        // take cat from server
        var cats;
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
