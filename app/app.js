// Declare app level module which depends on views, and components
angular.module('app', [
  'ui.router',
  'ngResource',
  'LocalStorageModule'
])

.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
    
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'components/home/home.html',
        })

        .state('add', {
          url: '/add',
          templateUrl: 'components/addCat/addCat.html',
          controller: 'addCatController'
        })

        .state('register', {
          url: '/register',
          templateUrl: 'components/register/register.html',
          controller: 'registerController as vm'
        });
}]);
