var app = angular.module('app');

app.controller('SearchCatCtrl', ['$rootScope','$scope', function($rootScope, $scope) {
    'use strict';

    $scope.submit = function(){ // for search started after submit button down
        $rootScope.$broadcast('Search', $scope.search);
    };
}]);