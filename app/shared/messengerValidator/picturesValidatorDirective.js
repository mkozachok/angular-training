var app = angular.module('app');

app.directive("picturesValidator", function($q) {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attributes, ngModel) {
            ngModel.$asyncValidators.picturesValidator = function(modelValue) {
                var defer = $q.defer();

                var image = new Image();
                image.onerror = function() {
                    defer.reject();
                };
                image.onload = function() {
                    if (image.width > 200) {
                        defer.resolve();
                    }
                    else {
                        defer.reject();
                    }
                };
                image.src = modelValue;

                return defer.promise;
            };
        }
    };
});