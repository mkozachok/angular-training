var app = angular.module('app');

app.controller('ChoseCatCtrl', ['votesService','$window','$scope', 'addOrDeleteCatService', 'AuthenticationService', '$cookieStore',  function(votesService ,$window, $scope, addOrDeleteCatService, AuthenticationService, $cookieStore) {
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
        likedCats[$scope.currentCat.name] = 0;
     //   $cookieStore.put($scope.currentCat.name, null);
       // console.log($cookieStore.get($scope.currentCat.name));
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
        if(likedCats[$scope.currentCat.name] === 0) {
            $scope.currentCat.votes++;
            //$cookieStore.put('likeCount', $scope.currentCat.votes);
            likedCats[$scope.currentCat.name] = $scope.currentCat.votes;
            $cookieStore.put(userCookie.name, likedCats);
         //   votesService.saveVotes(userCookie, likedCats);
        }
    };

    $scope.disLike = function()
    {
        if(likedCats[$scope.currentCat.name] !== 0) { //$scope.currentCat.votes > 0 &&
            if($scope.currentCat.votes > 0) $scope.currentCat.votes --;
            likedCats[$scope.currentCat.name] = $scope.currentCat.votes;
          //  $cookieStore.put(userCookie.name, likedCats);
        }
    };

    console.log('finish: ' ,favoriteCookie);

    $scope.increment = function(){
        $scope.currentCat.count += 1;
    };

    $scope.emit = function() {
        $scope.$emit('emitFromChild', $rootScope.toParent); // вверх!
    };
}]);
