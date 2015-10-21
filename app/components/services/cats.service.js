angular.module('app').factory('catsService', function ($http, $q, $route, $location, $window, authService) {
    var likesStorage = $window.localStorage.getItem('likes'),
        likes = likesStorage ? JSON.parse(likesStorage) : {};

    var likeCat = function(cat) {
        var user = profile.get(),
            likesStorage = $window.localStorage.getItem(user.name),
            likes = likesStorage > 0 ? JSON.parse(likesStorage) : {};
        likes[user.name] = likes[user.name] || {};
        likes[user.name][cat.id] = likes[user.name][cat.id] || 0;
        if (likes[user.name][cat.id] < 1) {
            likes[user.name][cat.id]++;
            $window.localStorage.setItem(user.name, JSON.stringify(likes));
            return true;
        } else {
            return false;
        }
    };
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
        var user = authService.getUser();
        if (user) {
            cat.owner = user.login;
        }
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
        'delete': deleteCat,
        'like': likeCat
    };
});