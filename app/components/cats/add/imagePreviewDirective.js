catApp.directive('imagePreview', function ()
{
	return {
		restrict : 'E',
		scope : {
			model : '='
		},
		templateUrl : 'components/cats/add/imagePreview.html'
	};
});