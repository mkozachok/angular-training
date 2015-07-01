var app = angular.module('app');

app.controller('RegistrationCtrl', ['$window', '$scope', '$cookieStore', '$location', 'authenticationService', 'UserForChekObj', function ($window ,$scope, $cookieStore, $location, authenticationService, UserForChekObj) {
    'use strict';
    $scope.users = [];
    $scope.userEmail = '';
    $scope.userPassword = '';
    $scope.userName = '';
    $scope.userPasswordRepeat = '';
    $scope.users = UserForChekObj.user;
    $scope.registration = function () {
        var autheticationResult =  authenticationService.checkLogin($scope.users, $scope.userEmail, $scope.userPassword);

        if(!autheticationResult) {
            authenticationService.registration($scope.userName, $scope.userEmail, $scope.userPassword);
            $cookieStore.put('user', $scope.userName);
            $cookieStore.put('fullUserData', undefined);
            $window.location.reload();
            $location.path('#/home');
        }
        //@todo else show error
    };
}]);

