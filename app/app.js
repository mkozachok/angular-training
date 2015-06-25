(function () {
  "use strict";
  angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'myApp.catsView',
    'myApp.catsAdd',
    'myApp.catsServices',
    'myApp.profileRegister',
    'myApp.profileLogin',
    'myApp.profileServices'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view'});
  }]);

})();
