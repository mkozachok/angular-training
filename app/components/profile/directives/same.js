/**
http://odetocode.com/blogs/scott/archive/2014/10/13/confirm-password-validation-in-angularjs.aspx
without watches
**/

__mainApp.directive('same', function() {
  return {
    require: 'ngModel',
    scope: {
            otherModelValue: "=compareTo"
        },
    link: function(scope, elem, attrs, ctrl) {
      ctrl.$validators.same = function(modelValue, viewValue) {

        var retResult = false;

        if(typeof scope.otherModelValue.$viewValue !== 'undefined' && null !== scope.otherModelValue.$viewValue)
        {
          console.log (scope.otherModelValue.$viewValue + "===" + viewValue);
            if(scope.otherModelValue.$viewValue === viewValue) retResult = true; 
            else retResult = false;
        }

console.dir(retResult);
        return retResult;
      };
    }
  };
}
);