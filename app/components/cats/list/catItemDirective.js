catApp.directive('catItem', function() {
	return {
		templateUrl: 'components/cats/list/catItem.html',
		controller: 'CatItemDirectiveController',
		controllerAs: 'catCtrl',
		bindToController: true,
		replace: true,
		scope: {
	        model: "=item"
      	}
	};
});