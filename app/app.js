var app = angular.module('app', ['ui.router', 'ngResource']).
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
                return KittyFactory.get().$promise.then(function (response) {
                    return response.cats;
                });
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
    });

}]);



