var app = angular.module('app');

app.service('likesService',['votesService','$cookieStore', function (votesService, $cookieStore) {

    var service = {
        like: function(scope, userCookie, likedCats){
            if(likedCats[scope.currentCat.name] === 0) {
                scope.currentCat.votes++;
                $cookieStore.put(userCookie + 'catVotes', scope.currentCat.votes);
                likedCats[scope.currentCat.name] = 1;

                votesService.saveVotes(userCookie, likedCats);
                votesService.updateUsers(userCookie);
            }
            return likedCats;
        },
        disLike: function(scope, userCookie, likedCats){
            if(likedCats[scope.currentCat.name] !== 0) {

                if(scope.currentCat.votes > 0)
                    scope.currentCat.votes --;

                likedCats[scope.currentCat.name] = 0;
                $cookieStore.put(userCookie + 'catVotes', scope.currentCat.votes);

                votesService.saveVotes(userCookie, likedCats);
                votesService.updateUsers(userCookie);
            }
            return likedCats;
        }
    };
    return service;
}]);
