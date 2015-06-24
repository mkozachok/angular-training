'use strict';

angular.module('myApp', ['ngRoute', 'ngResource', 'myApp.home']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }]);
