angular.module("app").directive("imagePathValidator", function (imagePathValidator) {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attributes, ngModel) {
            ngModel.$asyncValidators.pathImage = function(modelValue) {
	          return imagePathValidator.isValid(modelValue);
        	};
        }
    };
});