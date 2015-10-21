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
});