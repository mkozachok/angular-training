catApp.directive('catItem', function() {
	return {
		templateUrl: 'templates/catItemDirective.html',
		controller: 'CatItemDirectiveController',
		controllerAs: 'catCtrl',
		bindToController: true,
		replace: true,
		scope: {
	        model: "=item"
      	}
	};
});