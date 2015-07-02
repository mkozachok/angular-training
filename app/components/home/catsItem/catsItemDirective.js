angular.module("app").directive("catsItem", function ($templateCache, $compile) {
    return {
        restrict: "E",
        compile: function (elem, attrs) {
            var tpl;
            tpl = $templateCache.get('components/home/catsItem/catsItem.html');
            elem.append(tpl);
            return function (scope) {
            };
        },
        replace: true
    };
});