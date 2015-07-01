catApp.controller('AlertController', function($modalInstance, data){
	var vm = this;

    vm.cancel = cancel;
    vm.editableItem = angular.copy(data.itemToView);
    vm.save = save;
    vm.title = (data.itemToView.alertType === "error" ? 'Connection lost. Try again later!' : 'Something went wrong. Try again later!');

    function cancel(){
        $modalInstance.dismiss();
    }

    function save(){
        $modalInstance.close(vm.editableItem);
    }
});