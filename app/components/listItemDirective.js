angular.module("app").directive("listItem", function ($templateCache, $compile) {
    return {
        restrict: "E",
        compile: function (elem, attrs) {
            var tpl;
            tpl = $templateCache.get('templates/cat.html');
            elem.append(tpl);
            return function (scope) {
            };
        }
    };
});