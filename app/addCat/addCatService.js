var app = angular.module('app');

app.service('addCatService',['KittyFactory', function (KittyFactory) {
    var service = {
        addCat : function (scope) {
            var resource = KittyFactory;
            var temp = {name: scope.kittyName, img: scope.kittyImg, count: 0, v: 0, votes: 0};
            resource.save(temp);
            scope.kittyName = '';
            scope.kittyImg = '';
        }
    };
    return service;
}]);
