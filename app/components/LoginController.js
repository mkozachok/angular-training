catApp.controller('LoginController', function($scope, indetityService) {							  				
		var vm = this;		
	
		vm.authenticated = false;

		vm.login = function (user){
			indetityService.check(user);
			vm.authenticated = indetityService.currentUser !== null;	
		};	
	});