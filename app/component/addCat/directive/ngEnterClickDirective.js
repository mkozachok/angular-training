var app = angular.module('app');

app.directive('ngEnterClick', function () {
    return {
        restrict: 'A',
        scope: {
            ngEnterClick: "&"
        },
        link: function (scope, elem, attrs) {
            elem.bind('keydown', function(event) {
                var code = event.which;
                if (code === 13) {
                    scope.ngEnterClick();
                }
            });
        }
    };
});