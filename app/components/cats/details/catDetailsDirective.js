app.directive('catDetails', function () {
    return {
        restrict: 'A',
        templateUrl: 'components/cats/details/catDetails.html',
        scope: {
            catInfo: '=info'
        }
    };
});