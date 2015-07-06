angular.module("app")
.controller("registerController", function (profileService) {
	var vm = this;
	vm.register = function(){
		console.log(vm);
	};

});