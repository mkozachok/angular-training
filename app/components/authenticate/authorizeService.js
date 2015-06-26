catApp.provider('authorizeProvider', function () {	
	var prepare = function(scope, locator, identityService) {
		var anonymous = ["/", "profileAdd", "about"];
		var defaultState = "/";

		scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){ 
			var isAuthenticated = (identityService.currentUser !== null);
			if (!isAuthenticated && (_.contains(anonymous, toState.name) === false)) {
				locator.go(defaultState);
				event.preventDefault();
			}
		});
	};

	return {
		$get : function ($rootScope) {
			return {
				prepare : prepare
			};
		}
	};
});

catApp.run(function(authorizeProvider, indetityService, $rootScope, $state) {
	authorizeProvider.prepare($rootScope, $state, indetityService);
});