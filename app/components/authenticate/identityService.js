catApp.service('indetityService', function (localStorageService) {	
	var vm = this;
	
	var storageKey = "currentUserProfile";

	vm.currentProfile = localStorageService.get(storageKey);
	vm.currentUser = null;

	vm.check = function (user) {
		var profileData = localStorageService.get(storageKey);
		if ((user) && (user.Name === profileData.Name) && (user.Password === profileData.Password)){
			vm.currentUser = user;
		}
	};

	vm.toLocalStorage = function(profileData){		
		localStorageService.set(storageKey, profileData);
		vm.currentProfile = profileData;
	};

	vm.canVote = function(cat){
		if (vm.currentProfile){
			var votes = vm.currentProfile.votes || [];
			return (_.contains(votes, cat.id) === false);
		}
	};

	vm.save = function () {
		vm.toLocalStorage(vm.currentProfile);
	};
});