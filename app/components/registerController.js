angular.module("app")
.controller("regCtrl", function ($scope, notifyService, localStorageService) {
	var vm = this;
	vm.register = function(){
		console.log(vm);
	};

});