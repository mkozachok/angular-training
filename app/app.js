var catApp = angular.module('app', ['ui.router', 'ngResource', 'LocalStorageModule', 'ngCookies']);

catApp.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider		
			.state('/', 
				{
					url: "/",
					templateUrl: "components/cats/list/catsList.html"
				})
			.state('catDetail', 
				{
					url: "/cat/:id",
					templateUrl: "components/cats/detail/catDetail.html"
				})
			.state('catAdd', 
				{
					url: "/add",
					templateUrl: 'components/cats/add/catAdd.html'
				})
			.state('profileAdd', 
				{
					url: "/createProfile",
					templateUrl: 'components/profile/profile.html'
				});			
	}]);