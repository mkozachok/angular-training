var app = angular.module('app');

app.service('checkVotes',['UserFactory', function (KittyFactory) {
    var service = {
        checkVotes : function (scope) {
            var resource = KittyFactory;
            var temp = {name: scope.kittyName, img: scope.kittyImg, count: 0, v: 0, votes: 0};
            resource.save(temp);
            scope.kittyName = '';
            scope.kittyImg = '';
        }
    };
    return service;
}]);

