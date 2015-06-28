var app = angular.module('app');

app.controller('RegistrationCtrl', ['$scope', '$location', 'AuthenticationService', 'UserForChekObj', function ($scope, $location, AuthenticationService, UserForChekObj) {
    'use strict';
    $scope.users = [];
    $scope.userEmail = '';
    $scope.userPassword = '';
    $scope.userName = '';
    $scope.userPasswordRepeat = '';
    $scope.users = UserForChekObj.user;
    $scope.registration = function () {
        var autheticationResult =  AuthenticationService.checkLogin($scope.users, $scope.userEmail, $scope.userPassword);

        if(!autheticationResult) {
            AuthenticationService.registration($scope.userName, $scope.userEmail, $scope.userPassword);
            $location.path('#/home');
        }
        //@todo else show error
    };
}]);

