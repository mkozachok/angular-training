angular.module('myApp.imagePreview', [])

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

  .directive('imagePreview', function (httpQuery) {
    return {
      restrict: 'A',
      require: "ngModel",
      //template: '<img src="{{imagePath}}" ng-hide="{{imagePath}}" style="max-width: 200px;" />',
      link: function (scope, element, attrs, ngModel) {
        ngModel.$asyncValidators.imagePath = function(modelValue, viewValue) {
          return httpQuery.isImage(modelValue);
        };
      }
    };
  });
