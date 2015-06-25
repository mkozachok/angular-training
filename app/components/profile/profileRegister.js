'use strict';

angular.module('myApp.profileRegister', [
    'ngRoute',
    'myApp.profileServices'
  ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/profile/register', {
      templateUrl: 'components/profile/templates/profileRegister.html',
      controller: 'profileRegister'
    });
  }])

  .controller('profileRegister', function ($rootScope, $scope, catsService, $location) {
    $scope.register = function() {
      if ($scope.profileRegister.name.$valid && $scope.profileRegister.email.$valid) {

        $scope.name = '';
        $scope.email = '';
        $scope.profileRegister.$setPristine();
        $scope.profileRegister.$setUntouched();
        $location.path('/view');
        $rootScope.selectedTab = 'view';
      }
    };

    $scope.cancel = function() {
      $scope.name = '';
      $scope.email = '';
      $scope.profileRegister.$setPristine();
      $scope.profileRegister.$setUntouched();
    };

    $scope.setClass = function() {
      if ($scope.profileRegister.name.$invalid || $scope.profileRegister.email.$invalid) {
        return 'disabled';
      }
      return '';
    };
  });
