var app = angular.module('app');

app.controller('ChoseCatCtrl', ['votesService','$window','$scope', 'addOrDeleteCatService', 'AuthenticationService', '$cookieStore',  function(votesService ,$window, $scope, addOrDeleteCatService, AuthenticationService, $cookieStore) {
    'use strict';
    $scope.sort = 'name';
    $scope.find = '';
    $scope.userActive = 0;
    var likedCats = {};

    $scope.$on('Search', function(events, args){
        $scope.find = args; //now we've registered!
    });

    $scope.$on('broadToChild', function(event, fromParent) {
        $scope.cats = fromParent;
    });

    $scope.chose = function(cat){
        var allUserData = $cookieStore.get('fullUserData');
            $scope.currentCat = cat;
            $scope.currentCat.v = 1;
            var currentCatName = $scope.currentCat.name;

            console.log(123, allUserData);
            if (allUserData.catVote[currentCatName] === undefined) {
                likedCats[currentCatName] = 0;
            }
            else if (allUserData.catVote[currentCatName] !== undefined) {
                likedCats[currentCatName] = allUserData.catVote[currentCatName];
                if (likedCats[currentCatName] === 1) $scope.currentCat.votes++;
            }
    };

    var userCookie = $cookieStore.get('user');

    if(userCookie){
        $scope.userActive = 1;
    }

  //@todo rewrite that work without reload
    $scope.deleteCat = function(catName){
        addOrDeleteCatService.deleteCat(catName);
        $scope.cats = addOrDeleteCatService.updateCat();
    };

    $scope.like = function()
    {
        if(likedCats[$scope.currentCat.name] === 0) {
            $scope.currentCat.votes++;
            likedCats[$scope.currentCat.name] = 1;
            votesService.saveVotes(userCookie, likedCats);
            $cookieStore.put('fullUserData', votesService.updateUsers());
        }
    };

    $scope.disLike = function()
    {
        if(likedCats[$scope.currentCat.name] !== 0) {
            if($scope.currentCat.votes > 0) $scope.currentCat.votes --;
            likedCats[$scope.currentCat.name] = 0;
            votesService.saveVotes(userCookie, likedCats);

            $cookieStore.put('fullUserData', votesService.updateUsers());
            console.log($scope.currentCat.votes,$cookieStore.get('fullUserData'));
        }
    };

    $scope.increment = function(){
        $scope.currentCat.count += 1;
    };

    $scope.emit = function() {
        $scope.$emit('emitFromChild', $rootScope.toParent); // вверх!
    };
}]);
