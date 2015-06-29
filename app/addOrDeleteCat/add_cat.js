var app = angular.module('app');

app.controller('AddCatCtrl', ['$scope', 'addOrDeleteCatService', '$cookieStore',  function($scope, addOrDeleteCatService, $cookieStore) {
        'use strict';
    $scope.userActive = 0;
    $scope.userName = '';

    var userCookie = $cookieStore.get('user');

    if(userCookie){
        $scope.userActive = 1;
        $scope.userName = userCookie;
    }

    //if(AuthenticationService.getUser()){
    //    $scope.userActive = 1;
    //    $scope.userName = AuthenticationService.getUser();
    //}

    $scope.addKitty = function ()
    {
        addOrDeleteCatService.addCat($scope);
    };

    }]);