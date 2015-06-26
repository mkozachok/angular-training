angular.module("app").directive("listItem", function ($templateCache, $compile) {
    return {
        restrict: "E",
        compile: function (elem, attrs) {
            var tpl;
            if (attrs.type === 'mentor') {
                tpl = $templateCache.get('templates/mentor.html');
            } else {
                tpl = $templateCache.get('templates/mentee.html');
            }
            elem.append(tpl);
            return function (scope) {
            };
        }
    };
});