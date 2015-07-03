angular.module('myApp.profileRegister', [
    'myApp.profileServices'
  ])

  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('profileRegister', {
      url: '/profile/register',
      templateUrl: 'components/profile/templates/profileRegister.html',
      controller: 'profileRegister'
    });
  }])

  .controller('profileRegister', function ($rootScope, $scope, $location, profileService) {
    'use strict';

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

    $scope.registerErrorsVisible = function(form) {
      var registerErrors = {
        nameRequired: form.name.$dirty && form.name.$error.required,
        passRequired: form.password.$dirty && form.password.$error.required,
        passRepeatRequired: form.password_repeat.$dirty && form.password_repeat.$error.required,
        passRepeatNonEqual: form.password_repeat.$dirty && !form.password_repeat.$error.required && form.password_repeat.$error.compareTo,
        emailRequired: form.email.$dirty && form.email.$error.required,
        emailNonValid: form.email.$dirty && form.email.$error.email
      };

      var visible = false;

      angular.forEach(registerErrors, function(value, key) {
        if (value === true) {
          visible = true;
        }
      });

      return visible;
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
