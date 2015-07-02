var app = angular.module('app');

app.controller('ChoseCatCtrl', ['KittyFactory', 'votesService','$window','$scope', 'addDeleteUpdateCatService', '$cookieStore',  function(KittyFactory, votesService ,$window, $scope, addDeleteUpdateCatService, $cookieStore) {
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

          if (allUserData.catVote.hasOwnProperty(currentCatName) === false) {
                likedCats[currentCatName] = 0;
           }
            else
            {
                 if (allUserData.catVote.hasOwnProperty(currentCatName)) {
                    if(allUserData.catVote.hasOwnProperty(currentCatName))
                    {
                        likedCats[currentCatName] = allUserData.catVote[currentCatName];
                        if (likedCats[currentCatName] === 1) $scope.currentCat.votes++;
                    }else{
                        likedCats[currentCatName] = 0;
                    }
                }

            }
    };

    var userCookie = $cookieStore.get('user');

    if(userCookie){
        $scope.userActive = 1;
    }

  //@todo rewrite that work without reload
    $scope.deleteCat = function(catName){
        addDeleteUpdateCatService.deleteCat(catName);
        var getCats = KittyFactory.get();
        getCats.$promise.then(function (response) {
            $scope.cats = response.cats;
        });
        $scope.currentCat.img = '';
    };

    $scope.like = function()
    {
        if(likedCats[$scope.currentCat.name] === 0) {
            $scope.currentCat.votes++;
            likedCats[$scope.currentCat.name] = 1;
            votesService.saveVotes(userCookie, likedCats);
            votesService.updateUsers(userCookie);
        }
    };

    $scope.disLike = function()
    {
        if(likedCats[$scope.currentCat.name] !== 0) {
            if($scope.currentCat.votes > 0) $scope.currentCat.votes --;
            likedCats[$scope.currentCat.name] = 0;
            votesService.saveVotes(userCookie, likedCats);
            votesService.updateUsers(userCookie);
        }
    };

    $scope.increment = function(){
        $scope.currentCat.count += 1;
    };

    $scope.emit = function() {
        $scope.$emit('emitFromChild', $rootScope.toParent); // вверх!
    };
}]);
