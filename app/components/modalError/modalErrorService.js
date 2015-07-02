angular.module('app').service('showError', function($injector) {

    this.showModal = function (response) {
      var modal = $injector.get('$modal');
      modal.open({
        animation: true,
        templateUrl: 'components/modalError/myModalContent.html',
        controller: 'modalController',
        resolve: {
          response: function () {
            return response;
          }
        },
        backdrop: 'static',
        size: 'sm'
      });

      return status;
    };
  });