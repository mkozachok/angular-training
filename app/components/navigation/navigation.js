angular.module('myApp.navigation', [])

  .config(function() {
  })

  .controller('navigationController', function ($rootScope, $scope, $location, profileService) {
    'use strict';

    $scope.selectedTab = $location.url();

    $scope.changeTab = function(tab) {
      $scope.selectedTab = tab;
    };

    $scope.navigationLogout = function() {
      profileService.logoutUser();

      // Redirect to main page.
      $location.path('/');
      $rootScope.selectedTab = '/';
    };

    $scope.isLogged = function() {
      if (profileService.getLoggedUser()) {
        return true;
      }
      else {
        return false;
      }
    };

  })

  .directive('navigationMain', function() {
    return {
      templateUrl: 'components/navigation/templates/navigation.html',
      restrict: 'A',
      controller: 'navigationController',
      replace: true
    };
  });
