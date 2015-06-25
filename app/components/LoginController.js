catApp.controller('LoginController', function($scope, indetityService) {							  				
		var vm = this;		
	
		vm.authenticated = false;
		vm.userTitle = "";
		vm.userData = {};

		vm.login = function(user){
			indetityService.check(user);
			vm.authenticated = indetityService.currentUser !== null;
			vm.userTitle = (indetityService.currentUser !== null) ? indetityService.currentUser.Name : "";
		};

		vm.logout = function(){
			indetityService.currentUser = null;
			vm.authenticated = false;
			vm.userData = null;
		};
	});