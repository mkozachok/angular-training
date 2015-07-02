
__mainApp

.controller('EditCatCtrl', ['$scope', 'myCatsService', 'shareService'
	, function($scope, mcs, share) {


	this.cat = share.selectedCat;
	$scope.$watch('edit.cat', function()
	{
		console.log('Edit Cat changed!'); 
	});

}]);
