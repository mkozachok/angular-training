angular.module("app").service('profileService', function(localStorageService) {
    this.register = function(username, user){
    	localStorageService.cookie.set('logged', username);
    	return localStorageService.set(username, user);
  	};

  	this.getUser = function(username){
    	return localStorageService.get(username);
  	};

  	this.login = function(username, password){
  		var user = this.getUser(username);
  		if(user.password == password){
    		localStorageService.cookie.set('logged', username);
    		return true;
    	}
    	else{
    		return false;
    	}
  	};

  	this.getLoggedUsername = function(){
    	return localStorageService.cookie.get('logged');
  	};
});