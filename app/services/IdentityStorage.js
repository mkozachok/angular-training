catApp.service('indetityStorage', function (localStorageService) {	
	var vm = this;

	vm.currentUser = null;

	vm.check = function (user) {
		var profileData = localStorageService.get("currentUserProfile");
		if ((user) && (user.Name === profileData.Name) && (user.Password === profileData.Password)){
			vm.currentUser = user;
		}
	};

	vm.toLocalStorage = function(profileData){
		localStorageService.set("currentUserProfile", profileData);
	};
});