var catApp = angular.module('app', ['ui.router', 'ngResource', 'LocalStorageModule', 'ngCookies']);

catApp.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider		
			.state('/', 
				{
					url: "/",
					templateUrl: "templates/cats.html"
				})
			.state('catDetail', 
				{
					url: "/cat/:id",
					templateUrl: "templates/detail.html"
				})
			.state('catAdd', 
				{
					url: "/add",
					templateUrl: 'templates/add.html'
				})
			.state('profileAdd', 
				{
					url: "/createProfile",
					templateUrl: 'templates/profile.html'
				});			
	}]);