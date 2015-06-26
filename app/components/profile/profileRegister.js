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

  .controller('profileRegister', function ($rootScope, $scope, catsService, $location, profileService) {
    $scope.registerProfile = function() {
      var form = $scope.profileRegister;

      if (form.name.$valid && form.password_repeat.$valid && form.email.$valid) {
        // Store new user to localStorage.
        profileService.registerUser({
          name: $scope.name,
          password: $scope.password_repeat,
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

        // Redirect to login page.
        $location.path('/profile/login');
        $rootScope.selectedTab = 'profile/login';
        $rootScope.registeredSuccess = true;
      }
    };

    $scope.registerCancel = function() {
      $scope.name = '';
      $scope.password = '';
      $scope.password_repeat = '';
      $scope.email = '';
      $scope.profileRegister.$setPristine();
      $scope.profileRegister.$setUntouched();
    };

    $scope.registerFormSubmitClass = function() {
      var form = $scope.profileRegister;
      if (form.name.$invalid || form.email.$invalid || form.password_repeat.$invalid) {
        return 'disabled';
      }
      return '';
    };
  })

  .directive("compareTo", function() {
    return {
      require: "ngModel",
      scope: {
        otherModelValue: "=compareTo"
      },
      link: function(scope, element, attributes, ngModel) {

        ngModel.$validators.compareTo = function(modelValue) {
          return modelValue == scope.otherModelValue;
        };

        scope.$watch("otherModelValue", function() {
          ngModel.$validate();
        });
      }
    };
  });
