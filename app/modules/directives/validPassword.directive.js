angular.module('directives').directive('validPassword', function () {
    return {
        require: '?ngModel',
        link: function (scope, elem, attr, ctrl) {
            ctrl.$validators.validPassDigit = function (modelValue, viewValue) {
                var value = modelValue || viewValue;
                return /[0-9]+/.test(value);
            };
            ctrl.$validators.validPassLowercase = function (modelValue, viewValue) {
                var value = modelValue || viewValue;
                return /[a-z]+/.test(value);
            };
            ctrl.$validators.validPassUppercase = function (modelValue, viewValue) {
                var value = modelValue || viewValue;
                return /[A-Z]+/.test(value);
            };
        }
    };
});