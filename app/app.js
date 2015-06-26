(function () {
    "use strict";
    angular.module("app", ['ui.router', 'ngResource']);

    angular.module("app").config(['$stateProvider',
		  function($stateProvider) {
		    $stateProvider
		        .state('catsState', {
			      url: "/cats",
			      templateUrl: "templates/Cats.html",
			      resolve: {
		      		cats:  function(CatsService) {
			            return CatsService.cats.get().$promise
			               .then (function (data) {
			                   return data;
			               });
			        }
			      },			      
			      controller: 'CatsController',
			      controllerAs: 'vm'
			    })
		        .state('catState', {
			      url: "/addCat",
			      templateUrl: "templates/AddCat.html"
			    });			    
		  }]);
})();
