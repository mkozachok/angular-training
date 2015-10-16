angular.module('app').factory('profile', function($http, $q, $window, $cookies) {
    var saveProfile = function (profile) {
        var data = $window.localStorage.getItem('profiles');
        var profiles = data ? JSON.parse(data) : [];
        profiles.push(profile);
        $window.localStorage.setItem('profiles', JSON.stringify(profiles));
    };
    var loginUser = function(user) {
        var data = $window.localStorage.getItem('profiles');
        var status = null;
        $window.localStorage.removeItem('loginedUser');
        if (data) {
            var profiles = data ? JSON.parse(data) : [];
            profiles.forEach(function(profile){
                if (profile.name == user.name && profile.password == user.password) {
                    status = profile;
                }
            });
        }
        if (status) {
            $cookies.put('user', status.name);
        }
        return status;
    };
    return {
        'save' : saveProfile,
        'login' : loginUser
    };
});