catApp.factory('httpInterceptor', function ($q, $rootScope, $log) {

    var numLoadings = 0;

    return {
        request: function (config) {
            numLoadings++;
            $rootScope.$broadcast("loader.show");
            return config || $q.when(config);

        },
        response: function (response) {
            if ((--numLoadings) === 0) {
                $rootScope.$broadcast("loader.hide");
            }
            return response || $q.when(response);

        },
        responseError: function (response) {
            if ((--numLoadings) === 0) {
                $rootScope.$broadcast("loader.hide");
            }
            return $q.reject(response);
        }
    };
})
.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
});