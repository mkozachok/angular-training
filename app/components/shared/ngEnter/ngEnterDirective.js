app.directive('ngEnter', function ($document) {
    return {
        restrict: "EA",
        scope: {
            ngEnter: "&"
        },
        link: function (scope, element, attrs) {
            $document.bind("keydown", function (event) {
                if (event.which === 13) {
                    scope.ngEnter();
                    event.preventDefault();
                }
            });
        }
    };
});