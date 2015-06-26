app.directive('catAdder', function () {
    return {
        restrict: 'A',
        templateUrl: 'directives/catAdder.html'
    };
});

app.directive('catDetails', function () {
    return {
        restrict: 'A',
        templateUrl: 'directives/catDetails.html',
        scope: {
            catInfo: '=info'
        }
    };
});