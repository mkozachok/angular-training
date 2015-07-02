angular.module("app").controller("navController", function ($scope, $location) {
    $scope.getClass = function (path) {
	    if(path === '/') {
	        if($location.path() === '/') {
	            return "active";
	        } else {
	            return "";
	        }
	    }
	 
	    if ($location.path().substr(0, path.length) === path) {
	        return "active";
	    } else {
	        return "";
	    }
	};
});