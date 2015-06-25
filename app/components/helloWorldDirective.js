angular.module("app").directive("helloWorld", function ($timeout) {
    return {
        restrict: "A",
        scope: {
            username: "@"
        },
        replace: true,
        template: "<p>Hello {{username}}!!!</p>",
        link: function (scope, element, attrs) {
            $timeout(function () {
                scope.username = "we forgot to ask you for your name...";
            }, 10000);
        }
    };
});