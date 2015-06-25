angular.module('app').directive( "homeSearchDirective", [ function() {
	"use strict";
    return {
     	restrict: "A",
     	replace: false,
     	templateUrl: 'views/homeView/homeSearch/home-search-directive.html',
     	controller: 'homeSearchCtrl',
     	controllerAs: 'search',
     	bindToController: true
	};

}]);