angular.module('directives').directive('validEmail', function () {
    return {
        require: '?ngModel',
        link: function (scope, elem, attr, ctrl) {
            ctrl.$validators.validEmail = function (modelValue, viewValue) {
                var value = modelValue || viewValue;
                return /[@]+/.test(value);
            };
        }
    };
});