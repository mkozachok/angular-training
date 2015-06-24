'use strict';
angular.module('myApp.home', ['ngRoute', 'ngResource'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])
    // controller home
    .controller('HomeCtrl', ['$scope','$resource', function($scope, $resource) {

        // take cat from server
        var Cats = $resource('/cat');
        var cats;
        $scope.cats = [];

        Cats.get().$promise.then(function (response) {
            cats = response;
            $scope.cats = cats.cats;
        });

        //work with cat data
        $scope.sort = 'name';
        $scope.find = '';

        $scope.addKitty = function ()
        {
            var temp = {name: $scope.kittyName, img: $scope.kittyImg, count:0, v:0, votes: 0 };
            Cats.save(temp);

            $scope.cats.push(temp);
            $scope.kittyName = '';
            $scope.kittyImg = '';
        };

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
