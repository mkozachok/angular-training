var app = angular.module('app', ['ui.router', 'ngResource', 'ng.confirmField', 'ngCookies']);

app.controller('MainCtrl', ['$scope', '$cookieStore', function($scope, $cookieStore) {
    'use strict';
    $scope.userName = 'login';

    var userCookie = $cookieStore.get('user');

    if(userCookie){
        $scope.userName = userCookie;
    }
}]);


