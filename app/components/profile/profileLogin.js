angular.module('myApp.profileLogin', [
    'myApp.profileServices'
  ])

  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('profileLogin', {
      url: '/profile/login',
      templateUrl: 'components/profile/templates/profileLogin.html',
      controller: 'profileLogin'
    });
  }])

  .controller('profileLogin', function ($rootScope, $scope, $location, profileService) {
    'use strict';

    $scope.loginError = false;

    if ($rootScope.registeredSuccess) {
      $scope.registeredMessage = true;
      $rootScope.registeredSuccess = false;
    }

    $scope.loginErrorClear = function() {
      $scope.loginError = false;
    };

    $scope.loginProfile = function() {
      var form = $scope.profileLogin || {};

      if (form.name.$valid && form.password.$valid) {
        // Try to get user data.
        var user = profileService.loginUser($scope.name, $scope.password);

        if (!user) {
          $scope.loginError = true;
        }
        else {
          // Clear form values.
          $scope.name = '';
          $scope.password = '';
          $scope.password_repeat = '';
          $scope.email = '';

          // Clear form states.
          if (!angular.isUndefined(form.$setPristine)) {
            form.$setPristine();
          }
          if (!angular.isUndefined(form.$setUntouched)) {
            form.$setUntouched();
          }

          // Redirect to main page.
          $location.path('/');
          $rootScope.selectedTab = '/';
        }
      }
    };

    $scope.loginCancel = function() {
      var form = $scope.profileLogin || {};

      $scope.name = '';
      $scope.password = '';

      if (!angular.isUndefined(form.$setPristine)) {
        form.$setPristine();
      }
      if (!angular.isUndefined(form.$setUntouched)) {
        form.$setUntouched();
      }
    };

    $scope.loginFormSubmitClass = function() {
      var form = $scope.profileLogin;
      if (form.name.$valid && form.password.$valid) {
        return '';
      }
      else {
        return 'disabled';
      }
    };
  });
