angular.module("app").controller("CatsController", function ($scope, $window, CatsService) {
	function successCallback(data) {
		$scope.cats = data.cats;
	}

	function errorCallback(error) {
    	console.log(error);
	}

    $scope.getCats = function () { 
    	CatsService.cats.get().$promise.then(successCallback, errorCallback); 
    }; 

    $scope.deleteCat = function (id) { 
    	if ($window.confirm("Do You want to delete this cat?")) {
	    	CatsService.catById.delete({id:id}, function(cat) {
	    		$scope.getCats();
	    	}); 
    	}
    };

    $scope.getCats();
});