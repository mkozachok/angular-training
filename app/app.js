// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'ngResource'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/view', {
    templateUrl: 'templates/view.html',
    controller: 'ViewCtrl'
  })
  .when('/add', {
    templateUrl: 'templates/add.html',
    controller: 'AddCtrl'
  })
  .otherwise({redirectTo: '/view'});
}]);
