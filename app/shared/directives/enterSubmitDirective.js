var app = angular.module('app');

app.directive('enterSubmit', function () {
    return {
        restrict: 'A',
        scope: {
            enterSubmit: "&"
        },
        link: function (scope, elem, attrs) {
            elem.bind('keydown', function(event) {
                var code = event.which;
                if (code === 13) {
                    scope.enterSubmit();
                }
            });
        }
    };
});