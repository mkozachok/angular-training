var app = angular.module('app')
    .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/home', {
                    controller: 'HomeCtrl',
                    templateUrl: 'templates/home.html'
            }
            );
    }
    ]);

    app.controller('HomeCtrl', ['$scope','$resource', 'KittyFactory', function($scope, $resource, KittyFactory) {
        'use strict';
        var resource = KittyFactory;
        // take cat from server
        var cats;
        $scope.cats = [];

        resource.get().$promise.then(function (response) {
            cats = response;
            $scope.cats = cats.cats;
        });

        $scope.broadcast = function() {
            $scope.$broadcast('broadToChild', $scope.toChild);
        };

        $scope.$on('emitFromChild', function(event, fromChild) {
            $scope.cats = fromChild;

        });
    }]);
