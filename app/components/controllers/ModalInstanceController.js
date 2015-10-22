angular.module('app').controller('ModalInstanceController', function ($scope, $modalInstance, cat) {

    $scope.question = 'Do you wont to remove this item?';

    $scope.ok = function () {
        $modalInstance.close(cat);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});