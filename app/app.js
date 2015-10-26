(function () {
    "use strict";
    angular.module("app", ['ngCookies', 'ngRoute', 'ngResource', 'ui.bootstrap', 'ngMessages', 'directives']);

    angular.module("app").config(function ($routeProvider, $httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
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
                    newCat: function ($route, catsService) {
                        return catsService.getOne($route.current.params.id);
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