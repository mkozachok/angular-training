(function () {
    "use strict";
    angular.module("app", ['ngCookies', 'ngRoute']);

    angular.module("app").config(function ($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: 'templates/cats.html',
                controller: 'mainController',
                resolve: {
                    cats: function (cats) {
                        return cats.getCats();
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
                    newCat: function (cats) {
                        return cats.getCats();
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
