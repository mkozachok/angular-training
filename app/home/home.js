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
            {name:'John', img:'http://www.cats.org.uk/uploads/images/pages/photo_latest14.jpg', count:0},
            {name:'Jessie', img:'http://www.thetimes.co.uk/tto/multimedia/archive/00342/114240651_cat_342943c.jpg', count:0},
            {name:'Johanna', img:'http://exmoorpet.com/wp-content/uploads/2012/08/cat.png', count:0},
            {name:'Joy', img:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR3yjneZMSf86yi4ZnxQbYWTlqSbo8DDAneKpl3uOMu49eJJy8h', count:0},
            {name:'Mary', img:'http://ak8.picdn.net/shutterstock/videos/1119358/preview/stock-footage-close-up-of-adult-tabby-cat-face-on-white-background.jpg', count:0},
            {name:'Peter', img:'http://thumbs.dreamstime.com/z/adult-tabby-cat-white-27198962.jpg', count:0},
        ];

        //  $scope.currentCat = $scope.cats[0];

        //$scope.chose = function(cat){
        ////console.log(cat);
        //$scope.myHTML =
        //    '<img src="{{ cat.img }}" ng-click="increment(cat)">' +
        //    '<span> Count: {{ cat.count }} </span>';
        //};

        $scope.increment = function(cat){
            cat.count += 1;
        };

        //$scope.myHTML =
        //    'I am an <code>HTML</code>string with ' +
        //    '<a href="#">links!</a> and other <em>stuff</em>';
    }]);
