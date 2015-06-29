var app = angular.module('app', ['ui.router', 'ngResource', 'ng.confirmField', 'ngCookies']).
  config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
    .state(
    {
        name:'home',
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl',
        resolve:{
            promiseObj:  function(KittyFactory){
                var getCats = KittyFactory.get();
                getCats.$promise.then(function (response) {
                    return response;
                });
                return getCats.$promise;
            }
        }
    })
    .state({
        name: 'addCat',
        url: '/add_cat',
        templateUrl: 'templates/add_cat.html',
        controller: 'AddCatCtrl'
    })
    .state({
        name: 'about',
        url: '/about',
        template: '<h1>Creator of this site... Mr.Catlord</h1>'
    })
    .state({
        name: 'authorization',
        url: '/authorization',
        templateUrl: 'templates/authorization.html',
        controller: 'loginCtrl',
            resolve:{
                userObj:  function(UserFactory){
                    var getUsers = UserFactory.get();
                    getUsers.$promise.then(function (response) {
                        return response;
                    });
                    return getUsers.$promise;
                }
            }
    })
    .state({
        name: 'registration',
        url: '/registration',
        templateUrl: 'templates/registration.html',
        controller: 'RegistrationCtrl',
            resolve:{
                UserForChekObj:  function(UserFactory){
                    var getUsers = UserFactory.get();
                    getUsers.$promise.then(function (response) {
                        return response;
                    });
                    return getUsers.$promise;
                }
            }
    });
}]);

app.controller('MainCtrl', ['$scope', '$cookieStore', function($scope, $cookieStore) {
    'use strict';
    $scope.userName = 'login';

    var userCookie = $cookieStore.get('user');

    if(userCookie){
        $scope.userName = userCookie;
    }
}]);


