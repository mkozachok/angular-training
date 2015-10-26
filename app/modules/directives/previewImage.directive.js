angular.module('directives').directive('previewImage', function() {
    return {
        scope: {
            cat: '='
        },
        restrict: 'E',
        templateUrl: '/templates/image-preview.html'
    };
});