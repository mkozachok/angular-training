(function (module) {

    var updateCatController = function ($scope, $location, catsService, newCat, authService) {
        $scope.title = 'Edit Cat'
        $scope.newCat = newCat;
        var user = authService.getUser();
        if (newCat && newCat.owner != user.login) {
            //$location.url('/');
        }


        $scope.editFormCancel = function (event) {
            $scope.newCat = null;
        };
        $scope.saveCat = function (cat) {
            if ($scope.newForm.$valid){
                catsService.save($scope.newCat).then(function(){
                    $location.url('/');
                });
            } else {
                console.log('Add form invalid');
            }
        }
    };

    module.controller("updateCatController", updateCatController);

}(angular.module("app")));