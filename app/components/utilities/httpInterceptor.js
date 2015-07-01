catApp.factory('httpInterceptor', function ($q, $rootScope, $log, alertService) {

    var numLoadings = 0;

    return {
        request: function (config) {
            numLoadings++;
            $rootScope.$broadcast("loader.show");
            return config || $q.when(config);

        },
        response: function (response) {
            numLoadings--;
            if (numLoadings === 0) {
                $rootScope.$broadcast("loader.hide");
            }

            return response || $q.when(response);

        },
        responseError: function (response) {
            numLoadings--;
            if (numLoadings === 0) {
                $rootScope.$broadcast("loader.hide");
            }

            if(response.status === 404){   
                alertService.error(response.config);
            }
            else
                alertService.warn(response.config);

            return $q.reject(response);
        }
    };
})
.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
});