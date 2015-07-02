angular.module('myApp.autoFocus', [])

  .directive('autoFocus', function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        element[0].focus();
      }
    };
  });
