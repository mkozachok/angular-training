angular.module('app').factory('cats', function ($http, $q, $route, $location) {
    var getCats = function () {
        var deferred = $q.defer();

        var id = $route.current.params.id ? '/' + $route.current.params.id : '';

        $http.get('/cats' + id).then(function (response) {
            deferred.resolve(response.data);
        }, function (response) {
            deferred.reject(response);
        });

        return deferred.promise;
    };
    var addCats = function (cat) {
        return $http.post('/cats', cat).then(function (response) {
            console.log('Added');
            $location.url('/');
        }, function () {
            console.error('error with adding');
        });
    };
    var deleteCat = function (cat) {
        return $http.delete('/cats/' + cat.id).then(function (response) {
            console.log('Deleted');
        }, function () {
            console.error('error with deleting');
        });
    };
    var updateCat = function (cat) {
        return $http.put('/cats/' + cat.id, cat).then(function (response) {
            console.log('Updating');
            $location.url('/');
        }, function () {
            console.error('error with updating');
        });
    };
    return {
        'getCats': getCats,
        'addCats': addCats,
        'updateCat': updateCat,
        'delete': deleteCat
    };
});