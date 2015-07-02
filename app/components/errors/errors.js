angular.module('myApp.errors', [
  ])
  .config(function($httpProvider) {
    'use strict';

    $httpProvider.interceptors.push(function($q, showError) {
      return {
        responseError: function(response){
          showError.showModal(response);
          return $q.reject(response);
        }
      };
    });
  })

  .service('showError', function($injector) {

    this.showModal = function (response) {
        var modal = $injector.get('$modal');
        modal.open({
          animation: true,
          templateUrl: 'components/errors/errorModal.html',
          controller: 'errorModal',
          resolve: {
            response: function () {
              return response;
            }
          }
        });
    };
  })

  .controller('errorModal', function ($scope, $modalInstance, response, $http) {

    $scope.status = response.status;
    $scope.statusText = response.statusText;
    $scope.message = response.data;
    $scope.try = tryAgain;
    $scope.ok = close;
    $scope.close = close;

    function close() {
      $modalInstance.close();
    }

    function tryAgain() {
      $modalInstance.close();
      return $http(response.config);
    }
  });
