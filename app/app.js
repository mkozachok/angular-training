(function () {
  "use strict";
  angular.module('myApp', [
    'ui.router',
    'ui.bootstrap',
    'ngResource',
    'myApp.formOnEnter',
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
  config(['$urlRouterProvider', function($urlRouterProvider) {
      $urlRouterProvider.otherwise('/view');
  }]);

})();
