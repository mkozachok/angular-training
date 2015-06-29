var app = angular.module('app');

app.controller('AddCatCtrl', ['$scope', 'addOrDeleteCatService', 'AuthenticationService',  function($scope, addOrDeleteCatService, AuthenticationService) {
        'use strict';
    $scope.userActive = 0;
    $scope.userName = '';
  //  console.log(111, AuthenticationService.getUser());
    if(AuthenticationService.getUser()){
        $scope.userActive = 1;
        $scope.userName = AuthenticationService.getUser();
    }

    $scope.addKitty = function ()
    {
        addOrDeleteCatService.addCat($scope);
    };

    }]);