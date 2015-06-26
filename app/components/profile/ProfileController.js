catApp.controller('ProfileController', function($scope, indetityService) {							  				
		var vm = this;				

		vm.create = function (profileData){
			indetityService.toLocalStorage(profileData);
		};	
	});