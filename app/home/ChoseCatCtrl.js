var app = angular.module('app');

app.controller('ChoseCatCtrl', ['$window','$scope', 'addOrDeleteCatService', 'AuthenticationService', '$cookieStore',  function($window, $scope, addOrDeleteCatService, AuthenticationService, $cookieStore) {
    'use strict';
    $scope.sort = 'name';
    $scope.find = '';
    $scope.userActive = 0;
    var likedCats = [];

    $scope.$on('Search', function(events, args){
        $scope.find = args; //now we've registered!
    });

    $scope.$on('broadToChild', function(event, fromParent) {
        $scope.cats = fromParent;
    });

    $scope.chose = function(cat){
        $scope.currentCat = cat;
        $scope.currentCat.v = 1;
        $cookieStore.put($scope.currentCat.name, null);
        console.log($cookieStore.get($scope.currentCat.name));
    };

    var userCookie = $cookieStore.get('user');

    if(userCookie){
        $scope.userActive = 1;
    }


    $scope.deleteCat = function(catName){
        addOrDeleteCatService.deleteCat(catName);
        $window.location.reload();
    };

    $scope.like = function()
    {
        if($cookieStore.get($scope.currentCat.name) === null) {
            $scope.currentCat.votes++;
            $cookieStore.put('likeCount', $scope.currentCat.votes);
            $cookieStore.put($scope.currentCat.name, userCookie.name);
        }
    };

    $scope.disLike = function()
    {
        if($cookieStore.get($scope.currentCat.name) !== null) {
            if($scope.currentCat.votes > 0) $scope.currentCat.votes --;
            $cookieStore.put('likeCount', $scope.currentCat.votes);
            $cookieStore.put($scope.currentCat.name, null);
        }
    };

    var favoriteCookie = $cookieStore.get('likeCount');

    console.log('finish: ' ,favoriteCookie);

    $scope.increment = function(){
        $scope.currentCat.count += 1;
    };

    $scope.emit = function() {
        $scope.$emit('emitFromChild', $rootScope.toParent); // вверх!
    };
}]);
