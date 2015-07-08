angular.module("app")
.controller("loginController", function (profileService, $location) {
	var vm = this;

	var loggedUsername = profileService.getLoggedUsername();

	vm.loggedUser = profileService.getUser(loggedUsername);

	vm.login = function(){
		if(profileService.login(vm.user.username, vm.user.password)){
			$location.path('/cats-list');
		}
		else{
			vm.user = undefined;
			vm.error = "Login or password is incorrect. Try again.";
		}
	};



});