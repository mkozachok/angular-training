angular.module('alertsModule').factory('alertsService', function(){
	var messages = [];

	function addError(message){
		messages.push(message);
		console.log(message);
	}

	function handleErrorResponse(error){
		var errorMessage = error.data &&error.data.error;
		addError(errorMessage);
	}

	return {
		addError: addError,
		handleErrorResponse: handleErrorResponse
	}
});