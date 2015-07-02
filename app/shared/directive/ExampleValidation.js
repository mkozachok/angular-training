var app = angular.module('app');

app.directive('myNumber', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        compile: function(element, attr) {
            var img = angular.element('<img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTTyptDmp09eMq1nHtcJHVTAMkKgqdi1ZiGMQSjFeYNApkO92zhCA" />');

            return function(scope, element, attr, ngModel) {
                function isNumber(n) {
                    return !isNaN(parseFloat(n)) && isFinite(n);
                }

                ngModel.$validators.mynumber = function(val) {
                    return isNumber(val);
                };
                scope.$watch(function() {
                        return ngModel.$error.mynumber;
                    },
                    function(newVal) {
                        if (newVal) {
                            element.after(img);
                        }
                        else {
                            img.remove();
                        }
                    });
            };
        }
    };
});