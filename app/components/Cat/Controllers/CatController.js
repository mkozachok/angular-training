angular.module("app").controller("CatController", function ($scope, $window, CatsService) {
	$scope.cat = {};

    $scope.addCat = function () {
    	CatsService.cats.save({}, { "id": 12, "name": $scope.cat.name, "image": "Assets\\img\\Cat1.jpg", "age": $scope.cat.age, "gender": $scope.cat.gender });
    }; 
});