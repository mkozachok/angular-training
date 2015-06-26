var app = angular.module('app');

app.controller('ChoseCatCtrl', ['$rootScope','$scope', function($rootScope, $scope) {
    'use strict';
    $scope.sort = 'name';
    $scope.find = '';
    $scope.$on('Search', function(events, args){
        $scope.find = args; //now we've registered!
    });


    $rootScope.$on('broadToChild', function(event, fromParent) {
        $scope.cats = fromParent;
    });

    $scope.chose = function(cat){
        $scope.currentCat = cat;
        $scope.currentCat.v = 1;
    };

    $scope.like = function()
    {
        $scope.currentCat.votes ++;
    };

    $scope.disLike = function()
    {
        if($scope.currentCat.votes > 0) $rootScope.currentCat.votes --;
    };

    $scope.increment = function(){
        $scope.currentCat.count += 1;
    };

    $scope.emit = function() {
        $scope.$emit('emitFromChild', $rootScope.toParent); // вверх!
    };
}]);
