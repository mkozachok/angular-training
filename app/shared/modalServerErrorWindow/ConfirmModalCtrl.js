var app = angular.module('app');

app.controller('ConfirmModalCtrl', ['$modalInstance', '$scope', 'response', 'message', '$http', '$location', function ($modalInstance, $scope, response, message, $http, $location) {

    $scope.status = response.status;
    $scope.statusText = response.statusText;
    $scope.message = message;

    $scope.ok = function () {
        $modalInstance.close();
    };
    $scope.cancel = function () {
        $modalInstance.close();
    };
    $scope.tryAgain = function () {
        $modalInstance.close();
        return $http(response.config);
    };
}]);