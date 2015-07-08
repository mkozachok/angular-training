angular.module("app").service('profileService', function(localStorageService, $state) {
    this.register = function(username, user){
      user.voted = 0;
    	localStorageService.cookie.set('logged', username);
    	return localStorageService.set(username, user);
  	};

  	this.getUser = function(username){
    	return localStorageService.get(username);
  	};

    this.updateUser = function(username, user){
      return localStorageService.set(username, user);
    };

  	this.login = function(username, password){
  		var user = this.getUser(username);
  		if(user && user.password == password){
    		localStorageService.cookie.set('logged', username);
    		return true;
    	}
    	else{
    		return false;
    	}
  	};

    this.logout = function(){
      $state.reload();
      return localStorageService.cookie.remove('logged');
    };

  	this.getLoggedUsername = function(){
    	return localStorageService.cookie.get('logged');
  	};

    this.getLoggedUser = function(){
      var loggedUsername = this.getLoggedUsername();
      if(loggedUsername){
        return this.getUser(loggedUsername);
      }
      else{
        return false;
      }
    };
});