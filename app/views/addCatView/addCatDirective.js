angular.module('app').directive("addCatDirective", [ function() {
	"use strict";
    return {
     	restrict: "A",
     	replace: false,
     	templateUrl: 'views/addCatView/add-cat-directive.html',
     	controller: 'addCatCtrl',
     	controllerAs: 'addOne',
     	bindToController: true
	};

}]);