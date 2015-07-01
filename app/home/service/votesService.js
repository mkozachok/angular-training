var app = angular.module('app');

app.service('votesService',['UserFactory', function (UserFactory) {
    var resource = UserFactory;
    var service = {
        updateUsers: function(){
            resource.get().$promise.then(function (response) {
                return response;
            });
        },
        saveVotes : function(user, votes){
            var temp = {name: user, catVote: votes };
            resource.delete(temp);
        }
    };
    return service;
}]);

