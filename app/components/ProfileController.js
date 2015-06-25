catApp.controller('ProfileController', function($scope, indetityStorage) {							  				
		var vm = this;				

		vm.create = function (profileData){
			indetityStorage.toLocalStorage(profileData);
		};	
	});