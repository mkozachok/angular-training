var app = angular.module('app');

app.controller('loginCtrl', ['$scope', 'userObj', 'AuthenticationService', function ($scope, userObj, AuthenticationService) {
    'use strict';
    $scope.users = [];
    $scope.userEmail = '';
    $scope.userPassword = '';

    $scope.users = userObj.user;
    $scope.login = function () {
       var autheticationResult =  AuthenticationService.checkLogin($scope.users, $scope.userEmail, $scope.userPassword);
    };
}]);

