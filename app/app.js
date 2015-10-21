(function () {
    "use strict";
    angular.module("app", ['ngCookies', 'ngRoute', 'alertsModule']);

    angular.module("app").config(function ($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: 'templates/cats.html',
                controller: 'mainController',
                resolve: {
                    cats: function (catsService) {
                        return catsService.getCats();
                    }
                }
            })
            .when('/profile', {
                templateUrl: 'templates/profile.html',
                controller: 'profileController'
            })
            .when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'loginController'
            })
            .when('/cat/add', {
                templateUrl: 'templates/cat-add.html',
                controller: 'addCatController'
            })
            .when('/cat/edit/:id', {
                templateUrl: 'templates/cat-add.html',
                controller: 'updateCatController',
                resolve: {
                    newCat: function (catsService) {
                        return catsService.getCats();
                    }
                }
            })
            .when('/about', {
                templateUrl: 'templates/about.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
})();