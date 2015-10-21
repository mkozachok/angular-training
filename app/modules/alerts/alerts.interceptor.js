<<<<<<< HEAD
angular.module('app').factory('alertsInterceptor', function($injector, $location, $q){
    return {
    }
=======
angular.module('alertsModule').factory('alertsInterceptor', function($q, alertsService){
	return {
		responseError: function(response){
			alertsService.handleErrorResponse(response);
			return $q.reject(response);
		}
	}
>>>>>>> 9f00f4e... Added aler service
});