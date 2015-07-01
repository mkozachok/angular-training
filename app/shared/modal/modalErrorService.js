angular.module('app').service('showError', function($injector) {

    this.showModal = function (response) {
      var modal = $injector.get('$modal');
      modal.open({
        animation: true,
        templateUrl: 'shared/modal/myModalContent.html',
        controller: 'ModalController',
        // resolve: {
        //   response: function () {
        //     return response;
        //   }
        // }
      });

      return status;
    };
  });