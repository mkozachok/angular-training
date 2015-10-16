angular.module('app').directive('previewImage', function() {
    return {
        scope: {
            cat: '='
        },
        restrict: 'E',
        templateUrl: '/templates/image-preview.html'
    };
});