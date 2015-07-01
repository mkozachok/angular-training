angular.module('app').service("notifyService", function ($rootScope) {
   this.notify = function (notifyName, data) {
      $rootScope.$emit(notifyName, data);
   };

   this.listen = function (notifyName, fn) {
      $rootScope.$on(notifyName, function (e, data) {
         fn(data);
      });
   };
   return {
      notify: this.notify,
      listen: this.listen
   };
});