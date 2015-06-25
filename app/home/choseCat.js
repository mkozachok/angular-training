var app = angular.module('app');

app.controller('ChoseCatCtrl', ['$rootScope', function($rootScope) {
    'use strict';
    $rootScope.sort = 'name';

    $rootScope.$on('broadToChild', function(event, fromParent) {
        $rootScope.cats = fromParent;
    });

    $rootScope.chose = function(cat){
        $rootScope.currentCat = cat;
        $rootScope.currentCat.v = 1;
    };

    $rootScope.like = function()
    {
        $rootScope.currentCat.votes ++;
    };

    $rootScope.disLike = function()
    {
        if($rootScope.currentCat.votes > 0) $rootScope.currentCat.votes --;
    };

    $rootScope.increment = function(){
        $rootScope.currentCat.count += 1;
    };

    $rootScope.emit = function() {
        $rootScope.$emit('emitFromChild', $rootScope.toParent); // вверх!
    };
}]);
