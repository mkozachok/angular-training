catApp.directive('imagePreview', function ()
{
	return {
		restrict : 'E',
		scope : {
			model : '='
		},
		replace: true,
		templateUrl : 'components/cats/add/imagePreview.html'
	};
});