// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'ngResource'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/view', {
    templateUrl: 'templates/view.html',
  })
  .when('/add', {
    templateUrl: 'templates/add.html',
    controller: 'AddCtrl'
  })
  .when('/register', {
    templateUrl: 'templates/register.html',
    controller: 'regCtrl'
  })
  .otherwise({redirectTo: '/view'});
}]);
