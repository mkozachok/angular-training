var app = angular.module('app');

app.factory('userInterceptor', ['$q', 'modalService', function ($q, modalService) {
    var userInterceptor = {
        request: function (config) {
            return config;
        },
        responseError: function (reject) {
            var message = '';
            if(reject.status == 404)
            {
                message = 'Connection lost. Try again later!';
                modalService.modalWindow(reject, message);
            }
            if((reject.status >= 400 && reject.status < 404) || (reject.status > 404 && reject.status < 599))
            {
                message = 'Something went wrong. Try again later!';
                modalService.modalWindow(reject, message);
            }
           return $q.reject(reject);
        },
        response: function (response) {
            return response;
        }
    };

    return userInterceptor;
}]);

