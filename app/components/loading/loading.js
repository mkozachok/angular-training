angular.module('myApp.loading', [])

  .config(function($httpProvider) {
    $httpProvider.interceptors.push('loadingStatusInterceptor');
  })

  .directive('loadingStatusClass', function() {
    return {
      link: function(scope, element) {

        var loading = function() {
          element.addClass('loading').removeClass('loaded');
        };

        var loaded = function() {
          element.addClass('loaded').removeClass('loading');
        };

        scope.$on('loadingStatusActive', loading);
        scope.$on('loadingStatusInactive', loaded);

        loaded();
      }
    };
  })

  .factory('loadingStatusInterceptor', function($q, $rootScope) {
    'use strict';

    var activeRequests = 0;

    var started = function() {
      if (activeRequests === 0) {
        $rootScope.$broadcast('loadingStatusActive');
      }
      activeRequests++;
    };

    var ended = function() {
      activeRequests--;
      if (activeRequests === 0) {
        $rootScope.$broadcast('loadingStatusInactive');
      }
    };

    return {
      request: function(config) {
        started();
        return config || $q.when(config);
      },
      response: function(response) {
        ended();
        return response || $q.when(response);
      },
      responseError: function(rejection) {
        ended();
        return $q.reject(rejection);
      }
    };
  });
