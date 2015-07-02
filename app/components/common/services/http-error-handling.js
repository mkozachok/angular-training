/**
 * @ngdoc overview
 * @name http-error-handling
 * @description
 *
 * Module that provides http error handling for apps.
 */
(function() {
    'use strict';
    angular.module('http-error-handling', [])
        .config(
            ['$provide', '$httpProvider', '$compileProvider',
                function($provide, $httpProvider, $compileProvider) {

                    var elementsList = $();

                    var showMessage = function(content, cl, time) {
                        $('<div/>')
                            .addClass(cl)
                            .hide()
                            .fadeIn('fast')
                            .delay(time)
                            .fadeOut('fast', function() {
                                $(this).remove();
                            })
                            .appendTo(elementsList)
                            .text(content);
                    };

                    $provide.factory('httpErrorHandlingInterceptor', function($q) { 
                        return {
                            // optional method
                            'request': function(config) {
                                // do something on success
                                return config;
                            },

                            // optional method
                            'requestError': function(rejection) {
                                // do something on error

                                return $q.reject(rejection);
                            },



                            // optional method
                            'response': function(successResponse) {
                                console.log('successResponse');
                                console.dir(successResponse);
                                showMessage('Success HTTP ' + successResponse.config.method.toUpperCase() + ' '+successResponse.config.url,
                                 'http-success-message', 5000);
                                if (successResponse.config.method.toUpperCase() !== 'GET') {
                                    //showMessage('Success', 'http-success-message', 15000);
                                }
                                return successResponse;
                            },

                            // optional method
                            'responseError': function(errorResponse) {
                                console.dir(errorResponse);
                                // do something on error
                                switch (errorResponse.status) {
                                    case 400:
                                        showMessage(errorResponse.data.message, 'http-error-message', 16000);
                                        break;
                                    case 401:
                                        showMessage('Wrong email or password', 'http-error-message', 16000);
                                        break;
                                    case 403:
                                        showMessage('You don\'t have the right to do this', 'http-error-message', 16000);
                                        break;
                                    case 404:
                                        showMessage('Connection lost. Try again later!', 'http-error-message', 16000);
                                        break;
                                    case 500:
                                        showMessage('Server internal error: ' + errorResponse.data.message, 'http-error-message', 16000);
                                        break;
                                    default:
                                        showMessage('Error ' + errorResponse.status + ': ' + errorResponse.data.message, 'http-error-message', 6000);
                                }
                                return $q.reject(errorResponse);
                            }
                        };
                    });


                    $httpProvider.interceptors.push('httpErrorHandlingInterceptor');

                   
        $compileProvider.directive('httpErrorMessages', function() {
            return {
                link: function(scope, element, attrs) {
                    elementsList.push($(element));
                }
            };
        });

                }
            ]);
})();