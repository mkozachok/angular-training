var app = angular.module('app');

app.service('votesService',['UserFactory', '$cookieStore', function (UserFactory, $cookieStore) {
    var resource = UserFactory;
    var service = {
        updateUsers: function(userName){
            var getUsers = UserFactory.get();
            getUsers.$promise.then(function (value) {
                var countOfUsers = value.user.length;
                var k = 0;

                for(var i=0; i<countOfUsers; i++)
                {
                    if(value.user[i].name === userName) {
                        k = i;
                        break;
                    }
                }
                $cookieStore.put('fullUserData', value.user[k]);
            });
        },
        saveVotes : function(user, votes){
            var temp = {name: user, catVote: votes };
            resource.delete(temp);
        }
    };
    return service;
}]);

