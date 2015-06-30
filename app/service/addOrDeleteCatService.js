var app = angular.module('app');

app.service('addOrDeleteCatService',['KittyFactory', function (KittyFactory) {
    var service = {
        addCat : function (scope) {
            var resource = KittyFactory;
            console.log(scope.cats.kittyImg, scope);
            var temp = {name: scope.kittyName, img: scope.cats.kittyImg, count: 0, v: 0, votes: 0};
            resource.save(temp);
            scope.kittyName = '';
            scope.cats.kittyImg = '';
        },
        deleteCat : function (catName) {
            //console.log(catName);
            var resource = KittyFactory;
            var temp = {name: catName};
            console.log(temp);
            resource.delete(temp);
        },
        updateCat: function(){
            var getCats = KittyFactory.get();
            getCats.$promise.then(function (response) {
                return response;
            });
        }
    };
    return service;
}]);
