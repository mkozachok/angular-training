angular.module("app").controller("AddCatController", function ($scope, $window, CatsService) {
	$scope.cat = {};

	var
		successMessage = 'Method has been completed successfully',
		errorMessage = 'Method has been completed with an error';

	function addCatSuccess() {
		$window.alert('Cat was added successfully!');
		return { success: true, resultMessage: successMessage};
	}

	function addCatFailure() {
		$window.alert('Cat was not added!');
		return { success: false, resultMessage: errorMessage};
	}

    $scope.addCat = function () {
    	CatsService.cats.save(
    		{}, 
    		{ "id": 12, "name": $scope.cat.name, "image": "Assets\\img\\Cat1.jpg", "age": $scope.cat.age, "gender": $scope.cat.gender },
    		addCatSuccess,
    		addCatFailure);
    }; 
});