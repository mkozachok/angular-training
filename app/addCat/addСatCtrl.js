var app = angular.module('app');

app.controller('addCatCtrl', ['$scope', 'addDeleteUpdateCatService', '$cookieStore',  function($scope, addDeleteUpdateCatService, $cookieStore) {
        'use strict';
    $scope.userActive = 0;
    $scope.userName = '';

    var userCookie = $cookieStore.get('user');

    if(userCookie)
    {
        $scope.userActive = 1;
        $scope.userName = userCookie;
    }


    $scope.addKitty = function ()
    {
        addDeleteUpdateCatService.addCat($scope);
    };

}]);