angular.module('app').factory('profile', function($http, $q, $window, $cookies, $location) {
    var loginedUser = $cookies.get('user')  ?  JSON.parse($cookies.get('user')) : null,
        data = $window.localStorage.getItem('profiles'),
        profiles = data ? JSON.parse(data) : {};

    var saveProfile = function (user) {
        profiles[user.name] = user;
        $window.localStorage.setItem('profiles', JSON.stringify(profiles));
        $location.url('/');
    };
    var loginUser = function(login) {
        if (profiles[login.name]) {
            if (profiles[login.name].password == login.password) {
                user = profiles[login.name];
            }
        }
        if (user) {
            $cookies.put('user', JSON.stringify(user));
        }
        loginedUser = user;
        return user;
    };
    var getUser = function () {
        return loginedUser;
    }
    return {
        'save' : saveProfile,
        'login' : loginUser,
        'get' : getUser
    };
});