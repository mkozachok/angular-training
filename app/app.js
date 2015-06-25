(function () {
  "use strict";
  angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'myApp.cats_view',
    'myApp.cats_add',
    'myApp.cats_services',
    'myApp.profile_register'
  ]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view'});
  }]);

})();
