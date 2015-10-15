angular.module('app').factory('cats', function($http) {
    var getCats = function () {
        return $http.get('/cats').then(function(response) {
            return response.data;
        }, function() {
            console.error('error');
            return [];
        });
    };
    var addCats = function (cat) {
        return $http.post('/cats', cat).then(function(response) {
            console.log('Added');
            window.location.href = '/';
        }, function() {
            console.error('error with adding');
        });
    };
    return {
        'getCats' : getCats,
        'addCats' : addCats
    };
});