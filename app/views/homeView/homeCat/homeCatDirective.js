angular.module('app').directive("homeCatDirective", [ function() {
	"use strict";
    return {
     	restrict: "A",
     	replace: false,
     	templateUrl: 'views/homeView/homeCat/home-cat-directive.html',
     	controller: 'homeCatCtrl',
     	controllerAs: 'oneCat',
     	bindToController: true
	};

}]);