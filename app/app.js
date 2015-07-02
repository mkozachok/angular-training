(function () {
  "use strict";
  angular.module('myApp', [
    'ui.router',
    'ui.bootstrap',
    'ngResource',
    'myApp.errors',
    'myApp.formOnEnter',
    'myApp.imagePathValidate',
    'myApp.navigation',
    'myApp.loading',
    'myApp.catsView',
    'myApp.catsAdd',
    'myApp.catsServices',
    'myApp.catsVoteSpinner',
    'myApp.profileRegister',
    'myApp.profileLogin',
    'myApp.profileServices'
  ]).
  config(function($urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
  });
})();
