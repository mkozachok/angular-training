var app = angular.module('app');

app.directive('triggerFocusOn', function($timeout) {
    return {
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                $timeout(function() {
                    var otherElement = document.querySelector('#' + attrs.triggerFocusOn);
                    if (otherElement) {
                        otherElement.focus();
                    }
                    else {
                        throw new Error("Can't find element: " + attrs.triggerFocusOn);
                    }
                });
            });
        }
    };
});