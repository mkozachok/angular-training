angular.module('app').directive("homeDirective", [ function() {
	"use strict";
    return {
     	restrict: "A",
     	replace: false,
     	templateUrl: 'views/homeView/home/home-directive.html',
     	controller: 'homeCtrl',
     	controllerAs: 'home',
     	bindToController: true
	};

}]);