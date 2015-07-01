catApp.factory('alertService', function ($rootScope){
	var alerts = [];

	var addAlert = function(alertType, request){
		var alert = {request : request, alertType: alertType};
		alerts.push(alert);
		$rootScope.$broadcast("alerts.new", alert);
	};

	var error = function(request){
		return addAlert("error", request);
	};

	var warn = function(request){
		return addAlert("warn", request);
	};

	var get = function(){
		return alerts;
	};

	return {
		error : error,
		warn : warn,
		get : get
	};
});