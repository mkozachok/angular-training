var app = angular.module('app');

app.directive('ngEnter', function () {
    return {
        restrict: 'A',
        scope: {
            ngEnter: "&"
        },
        link: function (scope, elem, attrs) {
            elem.bind('keydown', function(event) {
                var code = event.which;
                if (code === 13) {
                    scope.ngEnter();
                    event.preventDefault();
                }
            });
        }
    };
});