angular.module('app').factory('catsService', function ($http, $resource, $q, $route, $location, $window, authService) {

    var catResource = $resource('/cats/:id', {id: '@id'}, {
            update: {method: 'PUT'},
            like: {method: 'PUT', url: '/cats/:id/like'}
        }),
        get = function () {
            return catResource.query();
        },
        getOne = function(id) {
            return catResource.get({id : id});
        },
        save = function (cat) {
            var promise;
            if (cat.id){
                promise = cat.$update();
            } else {
                promise = catResource.save(cat).$promise;
            }
            return promise;
        },
        like = function (cat) {
            var promise;
            if (cat.id){
                promise = cat.$like();
            } else {
                promise = catResource.save(cat).$promise;
            }
            return promise;
        },
        drop = function (cat) {
            cat.$remove();
            return cat.$promise;
        };

    return {
        'getCats': get,
        'getOne': getOne,
        'save': save,
        'delete': drop,
        'like' : like
    };
});