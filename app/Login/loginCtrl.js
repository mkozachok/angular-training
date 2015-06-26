var app = angular.module('app');
    // контроллер home
app.controller('loginCtrl', ['$scope', function($scope) {
    'use strict';
    $scope.login = function() {
        console.log($scope.userEmail, $scope.userPassword);
    };
}]);

