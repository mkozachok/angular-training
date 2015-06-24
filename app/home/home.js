'use strict';
angular.module('myApp.home', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])
    // controller home
    .controller('HomeCtrl', ['$scope', function($scope) {
        $scope.cats = [
            {name:'John', img:'http://www.cats.org.uk/uploads/images/pages/photo_latest14.jpg', count:0, v:1, votes: 0},
            {name:'Jessie', img:'http://www.thetimes.co.uk/tto/multimedia/archive/00342/114240651_cat_342943c.jpg', count:0, v:0, votes: 0 },
            {name:'Johanna', img:'http://exmoorpet.com/wp-content/uploads/2012/08/cat.png', count:0, v:0},
            {name:'Joy', img:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR3yjneZMSf86yi4ZnxQbYWTlqSbo8DDAneKpl3uOMu49eJJy8h', count:0, v:0, votes: 0},
            {name:'Mary', img:'http://ak8.picdn.net/shutterstock/videos/1119358/preview/stock-footage-close-up-of-adult-tabby-cat-face-on-white-background.jpg', count:0, v:0, votes: 0},
            {name:'Peter', img:'http://thumbs.dreamstime.com/z/adult-tabby-cat-white-27198962.jpg', count:0, v:0, votes: 0},
        ];

        $scope.currentCat = $scope.cats[0];
        $scope.sort = 'name';
        $scope.find = '';

        $scope.addKitty = function ()
        {
            var temp = {name: $scope.kittyName, img: $scope.kittyImg, count:0, v:0, votes: 0 };
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
