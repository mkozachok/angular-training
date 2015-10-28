angular.module('app').factory('authService', function ($http, $window, $q) {
    var token = $window.localStorage.getItem('token'),
        userJson = $window.localStorage.getItem('user'),
        user = userJson ? JSON.parse(userJson) : null;

    function register(data) {
        $http.post('/register', data).then(function (resp) {
            console.log(resp);
        });
    }

    function login(data) {
        var deferred = $q.defer();
        $http.post('/auth', data).then(function (resp) {
            if (resp.data.status === 'success') {
                token = resp.data.token;
                if (token) {
                    $window.localStorage.setItem('token', token);
                    $window.localStorage.setItem('user', JSON.stringify(resp.data.user));
                    user = resp.data.user;
					deferred.resolve(user);
                } else {
                    deferred.reject();
                }
            } else {
                deferred.reject();
                logout();
            }
        });
	
		return deferred.promise;
    }

    function logout() {
        token = undefined;
        user = null;
        $window.localStorage.removeItem('token');
        $window.localStorage.removeItem('user');
    }

    function getToken() {
        return token;
    }

    function getUser() {
        return user;
    }

    function isLoggedIn() {
        return user || token ? true : false;
    }

    return {
        register: register,
        login: login,
        logout: logout,
        getToken: getToken,
        isLoggedIn: isLoggedIn,
        getUser: getUser
    };
});