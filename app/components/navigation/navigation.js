angular.module('myApp.navigation', [])

  .config(function() {
  })

  .controller('navigationController', function ($rootScope, $scope, $location, profileService) {
    'use strict';

    $scope.navigationLogout = function() {
      profileService.logoutUser();

      // Redirect to main page.
      $location.path('/view');
      $rootScope.selectedTab = 'view';
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
