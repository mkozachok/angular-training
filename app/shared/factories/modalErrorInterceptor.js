angular.module("app").factory('modalErrorInterceptor', function($q, showError) {  
    var userInterceptor = {
        request: function(config, request) {
            // console.log('request', config);
           // config.requestTimestamp = new Date().getTime();
            return config;
        },
        responseError: function(response) {
           console.log('requestError', response);
           showError.showModal(response);
         return $q.reject(response);
        },
        response: function(response) {
            // console.log('response', response);
   //         response.config.responseTimestamp = new Date().getTime();
            return response;
        }
    };
    return userInterceptor;
});