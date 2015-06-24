'use strict';
var app = angular.module('myApp.home', ['ngRoute', 'ngResource'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }]);
    // controller home
    app.controller('HomeCtrl', ['$scope', '$resource', 'KittyFactory', function($scope, $resource, KittyFactory) {

        var resource = KittyFactory;
        // take cat from server
        var cats;
        $scope.cats = [];

        resource.get().$promise.then(function (response) {
            cats = response;
            $scope.cats = cats.cats;
        });

        //work with cat data
        $scope.sort = 'name';
        $scope.find = '';

        $scope.submit = function(){ // for search started after submit button down
            $scope.find = $scope.search
        };

        $scope.chose = function(cat){
            $scope.currentCat = cat;
            $scope.currentCat.v = 1;
        };

        $scope.like = function()
        {
            $scope.currentCat.votes ++;
        };

        $scope.disLike = function()
        {
            if($scope.currentCat.votes > 0) $scope.currentCat.votes --;
        };

        $scope.increment = function(){
            $scope.currentCat.count += 1;
        };
    }]);
