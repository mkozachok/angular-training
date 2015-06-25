catApp.controller('LoginController', function($scope, indetityStorage) {							  				
		var vm = this;		
	
		vm.authenticated = false;

		vm.login = function (user){
			indetityStorage.check(user);
			vm.authenticated = indetityStorage.currentUser !== null;	
		};	
	});