angular.module("app").factory('CatsService', ['$resource', function ($resource) {
    var cats = $resource('/cats'),
        catById = $resource('/cats/:id', {id:'@id'});

    return {
        cats: cats,
        catById: catById
    };
}]);