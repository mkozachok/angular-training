__mainApp
 .directive('truthfulOld', function() {
    return function(scope, element) {
      function updateUi() {
        if (scope.isTrue) { //NOTE: change to whatever you have in your scope
          element.html('<span style="color:#008000; font-weight:bold;">The statement is true</span>');
        }
        else {
          element.html('<span style="color:#008000; font-weight:bold;">The statement is <span style="color: #FF0000;">NOT</span> true</span>');
        }
      }

      scope.$watch('isTrue', updateUi);
    };
  });
  
__mainApp
.directive("truthFul", function () {
    return {
        restrict: "AE",
        templateUrl: "templates/truthfulTpl.html",
        replace: false,
        controller: 'TruthfulCtrl',
        controllerAs: 'thruthful',
        bindToController: true,
        scope: {
            'data':'='
        },
    };
});