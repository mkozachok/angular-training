angular.module('directives')
    .directive('focus', function() {
        return {
            link: function(scope, elems, attr) {
                var elem = elems[0];
                elem.focus();
            }
        };
    });