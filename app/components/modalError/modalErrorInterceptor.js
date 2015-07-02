angular.module("app").factory('modalErrorInterceptor', function($q, showError) {  
    var userInterceptor = {
        responseError: function(response) {
          showError.showModal(response);
          return $q.reject(response);
        }
    };
    return userInterceptor;
});