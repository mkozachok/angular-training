'use strict';
var app = angular.module('myApp.home', ['ngRoute', 'ngResource'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }]);

    app.controller('HomeCtrl', ['$scope','$resource', 'KittyFactory', function($scope, $resource, KittyFactory) {

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

    app.controller('SearchCatCtrl', ['$rootScope','$scope', function($rootScope, $scope) {

        $rootScope.find = '';

        $rootScope.submit = function(){ // for search started after submit button down
            $rootScope.find = $scope.search;
        };

        $rootScope.$on('broadToChild', function(event, fromParent) {
            $rootScope.cats = fromParent;
        });

        $rootScope.emit = function() {
            $rootScope.$emit('emitFromChild', $rootScope.toParent); // вверх!
        };
    }]);

    app.controller('ChoseCatCtrl', ['$rootScope', function($rootScope) {

        $rootScope.sort = 'name';

        $rootScope.$on('broadToChild', function(event, fromParent) {
            $rootScope.cats = fromParent;
        });

        $rootScope.chose = function(cat){
            $rootScope.currentCat = cat;
            $rootScope.currentCat.v = 1;
        };

        $rootScope.like = function()
        {
            $rootScope.currentCat.votes ++;
        };

        $rootScope.disLike = function()
        {
            if($rootScope.currentCat.votes > 0) $rootScope.currentCat.votes --;
        };

        $rootScope.increment = function(){
            $rootScope.currentCat.count += 1;
        };

        $rootScope.emit = function() {
            $rootScope.$emit('emitFromChild', $rootScope.toParent); // вверх!
        };
    }]);
