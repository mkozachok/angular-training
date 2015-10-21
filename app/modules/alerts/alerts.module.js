<<<<<<< HEAD
angular.module('alertsModule', []).config(function($provide, $httpProvider) {
    $httpProvider.interceptors.push('alertsInterceptor');

    $provide.decorator();
=======
angular.module("alertsModule", []).config(function($provide, $httpProvider){

	$httpProvider.interceptors.push('alertsInterceptor');

	$provide.decorator('$exceptionHandler', function($delegate, alertsService){
		return function(exception, cause) {
			$delegate(exception, cause);
			alertsService.addError(exception.message);
		};
	});
>>>>>>> 9f00f4e... Added aler service
});