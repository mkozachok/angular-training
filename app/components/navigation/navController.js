angular.module("app").controller("navController", function ($scope, $location, profileService) {
    $scope.username = 'Guest';
    $scope.collapse = false;
	$scope.isLogged = function(){
		$scope.username = profileService.getLoggedUsername();
		return $scope.username;
	};
	$scope.logout = function(){
		profileService.logout();
	};
	$scope.cons = function(){
		console.log($scope);
	};
});