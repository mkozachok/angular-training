var app = angular.module('app');

app.controller('RegistrationCtrl', ['$scope', 'AuthenticationService', function ($scope, AuthenticationService) {
    'use strict';
    $scope.userEmail = '';
    $scope.userPassword = '';
    $scope.userName = '';
    $scope.userPasswordRepeat = '';

   // $scope.users = userObj.user;
    $scope.registration = function () {
        AuthenticationService.registration($scope.userName, $scope.userEmail, $scope.userPassword);
    };
}]);

