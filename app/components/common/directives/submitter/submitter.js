__mainApp
.directive("submitter", function () {
    return {
        restrict: "AE"
        ,replace: false
        ,link: function(scope, element, attrs)
                {   
                    var findElementByIdScoped = function(scope, id)
                    {
                        var children = scope.children;
                        for (var i = 0; i < children.length; i++) 
                        {
                            var child = children[i];
                            if( child.id === id)
                                return child;
                            var grandchildren = child.children;
                            if(grandchildren.length > 0 )
                            {
                                var foundInChild = findElementByIdScoped(child, id);
                                if(foundInChild !== null) return foundInChild;
                            }

                        }
                        return null;
                    }
                   var button = findElementByIdScoped(element[0], attrs.submitter);
                   if(button !== null)
                   {
                        element.bind("keypress", function (event) 
                        {
                            if(event.which === 13) 
                            {
                                angular.element(button).triggerHandler('click');
                            } 
                        });
                    }
                }
        ,scope: true
    };
});