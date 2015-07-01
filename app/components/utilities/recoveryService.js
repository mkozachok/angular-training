catApp.factory('recoveryService', function($http){
	
	var tryRecover = function(request){
		return $http(request);
	};

	return {
		tryRecover : tryRecover
	};
});