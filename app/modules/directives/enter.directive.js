angular.module('directives').directive('ngSubmit', function ($parse, $document) {
    return {
        link: function (scope, elem, attr) {
            var fn = $parse(attr.ngSubmit);
            var formName = attr.name;
            $document.on('keydown', function (e) {
                if (e.keyCode == 13 && scope[formName].$valid) {
                    scope.$apply(function () {
                        fn(scope);
                    });
                }
            });
        }
    };
});