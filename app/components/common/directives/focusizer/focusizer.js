__mainApp
.directive("focusizer", function ($compile) {
    var compile = $compile;
    return {
        restrict: "A"
        ,replace: false
        ,link: function(scope, element, attrs)
                {
                    if (attrs.focusizer === "yes") 
                    {
                        element[0].focus();
                        attrs.$set('focusizer', 'no');
                        compile(element)(scope);
                    }
                }
        ,scope: true
    };
});