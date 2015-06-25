'use strict';

angular.module('myApp.catsAdd', [
    'ngRoute',
    'ngResource',
    'myApp.catsServices'
  ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/add', {
      templateUrl: 'components/cats/templates/catsAdd.html',
      controller: 'catsAdd'
    });
  }])

  .controller('catsAdd', function ($scope, catsService, $location) {
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
