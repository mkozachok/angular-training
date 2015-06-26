var app = angular.module('app', ['ngRoute', 'ngResource', 'myApp.add_cat']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);



