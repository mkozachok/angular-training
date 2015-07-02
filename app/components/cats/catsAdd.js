angular.module('myApp.catsAdd', [
    'myApp.catsServices',
    'myApp.profileServices'
  ])

  .config(['$stateProvider', function($stateProvider) {
    'use strict';

    $stateProvider.state('catsAdd', {
      url: '/add',
      templateUrl: 'components/cats/templates/catsAdd.html',
      controller: 'catsAdd'
    });
  }])

  .controller('catsAdd', function ($rootScope, $scope, catsService, $location, profileService) {
    $scope.add = function() {
      if ($scope.catAdd.name.$valid && $scope.catAdd.path.$valid) {
        var author = profileService.getLoggedUser();
        var newCat = {
          name: $scope.name,
          path: $scope.path,
          viewed: 0,
          votes: 0,
          votedBy: [],
          author: author
        };

        catsService.insertCat(newCat).then(function() {
          $scope.name = '';
          $scope.path = '';
          $scope.catAdd.$setPristine();
          $scope.catAdd.$setUntouched();

          $location.path('/view');
          $rootScope.selectedTab = 'view';
        });
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
