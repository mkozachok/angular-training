angular.module('app').factory('authService', function($http, $window){
    var token = $window.localStorage.getItem('token'),
        userJson = $window.localStorage.getItem('user'),
        user = JSON.parse(userJson) || {};

    function register(data){
        $http.post('/register', data).then(function(resp){
            console.log(resp);
        })
    }

    function login(data){
        $http.post('/auth', data).then(function(resp){
            token = resp.data.token;
            $window.localStorage.setItem('token', token);
            $window.localStorage.setItem('user', JSON.stringify(resp.data.user));
            user = resp.data.user;
        });
    }

    function logout(){
        token = undefined;
        $window.localStorage.removeItem('token');
    }

    function getToken(){
        return token;
    }

    function getUser(){
        return user;
    }

    return {
        register: register,
        login: login,
        logout: logout,
        getToken: getToken,
        getUser: getUser
    }
});