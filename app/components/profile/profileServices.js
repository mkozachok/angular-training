angular.module('myApp.profileServices', [
    'LocalStorageModule'
  ])

  .service('profileService', function (localStorageService) {
    'use strict';

    this.registerUser = function (user) {
      return localStorageService.set(user.name, user);
    };

    this.loginUser = function (username, password) {
      var user = localStorageService.get(username);
      if (angular.isObject(user) && user.password == password) {
        localStorageService.cookie.set('loggedUser', user);
        return true;
      }
      else {
        return false;
      }
    };

    this.getLoggedUser = function () {
      var user = localStorageService.cookie.get('loggedUser');

      if (angular.isObject(user)) {
        return user.name;
      }
      else {
        return false;
      }
    };

    this.logoutUser = function () {
      return localStorageService.cookie.remove('loggedUser');
    };
  });
