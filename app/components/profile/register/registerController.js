angular.module("app")
.controller("registerController", function (profileService, $location) {
	var vm = this;
	vm.register = function(){
		profileService.register(vm.user.username, vm.user);
		$location.path('/cats-list');
	};

});