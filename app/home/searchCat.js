var app = angular.module('app');

app.controller('SearchCatCtrl', ['$rootScope','$scope', function($rootScope, $scope) {
    'use strict';
    $rootScope.find = '';

    $rootScope.submit = function(){ // for search started after submit button down
        $rootScope.find = $scope.search;
    };

    $rootScope.$on('broadToChild', function(event, fromParent) {
        $rootScope.cats = fromParent;
    });

    $rootScope.emit = function() {
        $rootScope.$emit('emitFromChild', $rootScope.toParent); // вверх!
    };
}]);