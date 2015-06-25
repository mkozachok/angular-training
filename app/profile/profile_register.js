'use strict';

angular.module('myApp.profile_register', [
    'ngRoute'
  ]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/profile/register', {
      templateUrl: 'profile/profile_register.html',
      controller: 'profileRegister'
    });
  }])

  .controller('profileRegister', function ($scope, catsService, $location) {
    $scope.add = function() {
      if ($scope.catAdd.name.$valid && $scope.catAdd.path.$valid) {
        catsService.insertCat({
          name: $scope.name,
          path: $scope.path,
          count: 0,
          viewed: 0,
          likes: 0
        });

        $scope.name = '';
        $scope.path = '';
        $scope.catAdd.$setPristine();
        $scope.catAdd.$setUntouched();
        $location.path('/view');
      }
    };

    $scope.cancel = function() {
      $scope.name = '';
      $scope.path = '';
      $scope.catAdd.$setPristine();
      $scope.catAdd.$setUntouched();
    };

    $scope.setClass = function() {
      if ($scope.catAdd.name.$invalid || $scope.catAdd.path.$invalid) {
        return 'disabled';
      }
      return '';
    };
  });
