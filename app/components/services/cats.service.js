angular.module('app').factory('cats', function($http, $q) {
    var getCats = function () {
        var deferred = $q.defer();

        $http.get('/cats').then(function(response) {
            deferred.resolve(response.data);
        }, function(response) {
            deferred.reject(response);
        });

        return deferred.promise;
    };
    var addCats = function (cat) {
        return $http.post('/cats', cat).then(function(response) {
            console.log('Added');
            window.location.href = '/';
        }, function() {
            console.error('error with adding');
        });
    };
    var deleteCat = function (cat) {
        return $http.delete('/cats/' + cat.id).then(function(response) {
            console.log('Deleted');
        }, function() {
            console.error('error with deleting');
        });
    };
    return {
        'getCats' : getCats,
        'addCats' : addCats,
        'delete': deleteCat
    };
});