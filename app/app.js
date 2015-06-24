(function () {
  "use strict";
  angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'myApp.cats'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view'});
  }]);

})();
