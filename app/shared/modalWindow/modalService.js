var app = angular.module('app');

app.service('modalService', ['$injector', function ($injector) {
    var service = {
        modalWindow: function (reject, message) {
            var modal = $injector.get('$modal');
            modal.open({
                animation: true,
                templateUrl: 'shared/modalWindow/confirm-modal.html',
                controller: 'ConfirmModalCtrl',
                resolve: {
                    response: function () {
                        return reject;
                    },
                    message: function() {
                        return message;
                    }
                }
            });
        }
    };
    return service;

}]);


