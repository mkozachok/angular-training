angular.module('alertsModule', []).config(function($provide, $httpProvider) {
    $httpProvider.interceptors.push('alertsInterceptor');

    $provide.decorator();
});