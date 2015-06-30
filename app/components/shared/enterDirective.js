catApp.directive('submitEnter', function ($document)
{
	return {
		restrict : 'A',
		scope : {
			submitEnter : '&'
		},

		link : function (scope, element, attrs) {
			$document.bind("keydown", function(event) {
                if(event.which === 13) {
                	scope.submitEnter();
                	event.preventDefault();
                }
            });
		}
	};
});