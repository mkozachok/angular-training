var app = angular.module('app');

app.service('votesService',['UserFactory', function (UserFactory) {
    var service = {
        checkVotes : function (scope) {
            var resource = KittyFactory;
            var temp = {name: scope.kittyName, img: scope.kittyImg, count: 0, v: 0, votes: 0};
            resource.save(temp);
            scope.kittyName = '';
            scope.kittyImg = '';
        },
        saveVotes : function(user, votes){
            var resource = UserFactory;

            var temp = {name: user.name, password: user.password, email: user.email, catVote: [votes] };
            console.log(JSON.stringify(votes), votes);
           // resource.save(temp);
        }
    };
    return service;
}]);

