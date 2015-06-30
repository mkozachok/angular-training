// Declare app level module which depends on views, and components
angular.module('app', [
  'ui.router',
  'ngResource',
  'LocalStorageModule'
])

.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/view');
    
      $stateProvider
        .state('view', {
          url: '/view',
          templateUrl: 'templates/view.html',
        })

        .state('add', {
          url: '/add',
          templateUrl: 'templates/add.html',
          controller: 'AddCtrl'
        })

        .state('register', {
          url: '/register',
          templateUrl: 'templates/register.html',
          controller: 'regCtrl as vm'
        });
}]);
