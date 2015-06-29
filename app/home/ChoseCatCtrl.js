var app = angular.module('app');

app.controller('ChoseCatCtrl', ['$scope', 'addOrDeleteCatService', 'AuthenticationService', '$cookieStore',  function($scope, addOrDeleteCatService, AuthenticationService, $cookieStore) {
    'use strict';
    $scope.sort = 'name';
    $scope.find = '';
    $scope.userActive = 0;

    $scope.$on('Search', function(events, args){
        $scope.find = args; //now we've registered!
    });

    $scope.$on('broadToChild', function(event, fromParent) {
        $scope.cats = fromParent;
    });

    $scope.chose = function(cat){
        $scope.currentCat = cat;
        $scope.currentCat.v = 1;
    };

// work with user login
    $scope.userName = 'No name';
    if(AuthenticationService.getUser()) {
        $scope.userActive = 1;
        $scope.userName = AuthenticationService.getUser();
    }


    $scope.deleteCat = function(catName){
        addOrDeleteCatService.deleteCat(catName);
    };

// votes
    $cookieStore.put('likeCount', [$scope.currentCat.votes]);
//    // Get cookie

//    // Removing a cookie
//    $cookieStore.remove('myFavorite');
    $scope.like = function()
    {
        $scope.currentCat.votes ++;
    };

    $scope.disLike = function()
    {
        if($scope.currentCat.votes > 0) $scope.currentCat.votes --;
    };


    $scope.increment = function(){
        $scope.currentCat.count += 1;
    };

    $scope.emit = function() {
        $scope.$emit('emitFromChild', $rootScope.toParent); // вверх!
    };
}]);
