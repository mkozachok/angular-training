angular.module('app').factory('authInterceptor', function($injector, $location, $q){
    return {
        request: function(config){
            var authService = $injector.get('authService');
            var token = authService.getToken();

            if (token){
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        },
        responseError: function(response){
            if (response.status === 401 || response.status === 403){
                $location.url('/');
            }
            return $q.reject(response);
        }
    };
});