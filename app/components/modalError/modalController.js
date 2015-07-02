angular.module('app').controller('modalController', function ($scope, $modalInstance, $http, response) {
  $scope.status = response.status;
  $scope.statusText = response.statusText;
  $scope.data = response.data;
  $scope.message = 'Something went wrong. Try again later!';
  if($scope.status == 404){
    $scope.message = 'Connection to lost. Try again later!';
  }
  $scope.close = function () {
    $modalInstance.close('close');
  };

  $scope.tryAgain = function () {
    $modalInstance.close('try again');
    $http(response.config);
  };
});