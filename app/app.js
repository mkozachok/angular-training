var app = angular.module('app', ['ngRoute', 'ngResource']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);



