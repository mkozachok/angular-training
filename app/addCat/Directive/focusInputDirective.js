var app = angular.module('app');

app.directive('focusInput', function($timeout) {
    return {
        link: function(scope, element, attrs) {
            //element.bind('click', function() {
                $timeout(function() {
                    //var otherElement = document.querySelector('#' + attrs.triggerFocusOn);
                    //if (otherElement) {
                    element[0].focus();
                    //}
                    //else {
                    //    throw new Error("Can't find element: " + attrs.triggerFocusOn);
                    //}
                //});
            });
        }
    };
});