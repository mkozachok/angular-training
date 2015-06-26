(function () {
  "use strict";
  angular.module('myApp', [
    'ui.router',
    'ngResource',
    'myApp.navigation',
    'myApp.loading',
    'myApp.catsView',
    'myApp.catsAdd',
    'myApp.catsServices',
    'myApp.profileRegister',
    'myApp.profileLogin',
    'myApp.profileServices'
  ]).
  config(['$urlRouterProvider', function($urlRouterProvider) {
      $urlRouterProvider.otherwise('/view');
  }]);

})();
