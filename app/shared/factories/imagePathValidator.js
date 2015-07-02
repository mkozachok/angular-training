angular.module('app').factory('imagePathValidator', function($q) {
    return {
      isValid: function(src) {
        var deferred = $q.defer();
        var image = new Image();

        image.onerror = function() {
          deferred.reject();
        };

        image.onload = function() {
          if (image.width > 10) {
            deferred.resolve();
          }
          else {
            deferred.reject();
          }
        };
        if(src !== undefined){
          image.src = src;
        }

        return deferred.promise;
      }
    };
  });