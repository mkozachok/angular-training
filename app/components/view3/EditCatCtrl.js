
__mainApp

.config(['$routeProvider', function($routeProvider) {
    console.log('route view 3');
  $routeProvider.when('/view3', {
    templateUrl: 'templates/view3.html',
    controller: 'EditCatCtrl'
  });
}])

.controller('EditCatCtrl', ['$scope', 'myCatsService', 'shareService', function($scope, mcs, share) {

	$scope.cat = share.selectedCat;
	$scope.$watch('cat', function()
	{
		console.log('Cat changed!'); 
	});

}]);
