'use strict';

angular.module('myApp.profileServices', [
    'LocalStorageModule'
  ])

  .service('profileService', function (localStorageService) {
    this.registerUser = function (user) {
      return localStorageService.set(user.name, user);
    };

    this.getUser = function (username) {
      var user = localStorageService.get(username);
      return user;
    };
  });
