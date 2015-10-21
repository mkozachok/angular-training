angular.module('alertsModule').factory('alertsService', function($injector){
	var messages = [];

	function addError(message){
		messages.push(message);
		console.log(message);

		var $timeout = $injector.get('$timeout');
		$timeout(function(){
			var ind = messages.indexOf(message);
			messages.splice(ind, 1);
		}, 3000);
	}

	function handleErrorResponse(error){
		var errorMessage = error.data &&error.data.error;
		addError(errorMessage);
	}

	function init(){
		var $rootElement = $injector.get('$rootElement'),
			$rootScope = $injector.get('$rootScope'),
			$compile = $injector.get('$compile'),
			scope = $rootScope.$new();

		scope.messages = messages;
		$rootElement.after($compile('<alerts></alerts>')(scope));
	}

	return {
		init: init,
		addError: addError,
		handleErrorResponse: handleErrorResponse
	}
});