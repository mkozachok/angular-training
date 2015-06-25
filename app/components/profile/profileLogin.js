'use strict';

angular.module('myApp.profileLogin', [
    'ngRoute',
    'myApp.profileServices'
  ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/profile/login', {
      templateUrl: 'components/profile/templates/profileLogin.html',
      controller: 'profileLogin'
    });
  }])

  .controller('profileLogin', function ($rootScope, $scope, catsService, $location, profileService) {
    $scope.loginProfile = function() {
      var form = $scope.profileLogin;

      if (form.name.$valid && form.email.$valid) {

        profileService.getUser({
          name: $scope.name,
          password: $scope.password,
          email: $scope.email
        });

        // Clear form values.
        $scope.name = '';
        $scope.password = '';
        $scope.password_repeat = '';
        $scope.email = '';

        // Clear form states.
        form.$setPristine();
        form.$setUntouched();

        // Redirect to main page.
        $location.path('/view');
        $rootScope.selectedTab = 'view';
      }
    };

    $scope.loginCancel = function() {
      $scope.name = '';
      $scope.password = '';
      $scope.profileLogin.$setPristine();
      $scope.profileLogin.$setUntouched();
    };

    $scope.loginFormSubmitClass = function() {
      var form = $scope.profileLogin;
      if (form.name.$invalid || form.password.$invalid) {
        return 'disabled';
      }
      return '';
    };
  });
