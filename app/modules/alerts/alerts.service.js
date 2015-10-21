<<<<<<< HEAD
angular.module('alertsModule').factory('alertService', function() {
    var message = [];

    var addError = function(message) {
        message.push(message);
        console.log(message);
    };

    var handleErrorResponce = function(error) {
        addError(eroor);
    };

    return {
        addError: 'addError',
        handleErrorResponce: 'handleErrorResponce'
    }
=======
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
>>>>>>> 9f00f4e... Added aler service
});