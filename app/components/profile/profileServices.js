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
        return user;
      }
      else {
        return false;
      }
    };
  });
