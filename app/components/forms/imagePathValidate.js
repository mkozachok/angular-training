angular.module('myApp.imagePathValidate', [])

  .factory('httpQuery', function($q) {
    return {
      isImage: function(src) {
        var deferred = $q.defer();
        var image = new Image();

        image.onerror = function() {
          deferred.reject();
        };

        image.onload = function() {
          if (image.width > 200) {
            deferred.resolve();
          }
          else {
            deferred.reject();
          }
        };

        image.src = src;

        return deferred.promise;
      }
    };
  })

  .directive('imagePathValidate', function (httpQuery) {
    return {
      restrict: 'A',
      require: "ngModel",
      link: function (scope, element, attrs, ngModel) {
        ngModel.$asyncValidators.imagePath = function(modelValue, viewValue) {
          return httpQuery.isImage(modelValue);
        };
      }
    };
  });
