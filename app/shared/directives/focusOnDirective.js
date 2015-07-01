var app = angular.module('app');

app.directive('focusOn', function($timeout) {
    return {
        link: function(scope, element, attrs) {
                element[0].focus();
        }
    };
});