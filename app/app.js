'use strict';

var app = angular.module('myApp', ['ngRoute', 'ngResource', 'myApp.home', 'myApp.add_cat']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);

app.factory("KittyFactory", function($resource) {

    return $resource('/cat');
       // var cats = [];

        //return {
        //kittyGet: function() {
        //    return Cats;
        //}
    //};
});

