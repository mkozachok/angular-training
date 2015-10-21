angular.module('alertsModule').factory('alertsInterceptor', function($q, alertsService){
	return {
		responseError: function(response){
			alertsService.handleErrorResponse(response);
			return $q.reject(response);
		}
	}
});