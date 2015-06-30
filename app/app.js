var catApp = angular.module('app', ['about', 'ui.router', 'ngResource', 'LocalStorageModule', 'ngCookies',
	'debug.exceptions',
	'debug.expressions']);

catApp.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider		
			.state('/', 
				{
					url: "/",
					templateUrl: "components/cats/list/catsList.html",
					resolve: {
						catsPromise : function(catsService){
							return catsService.all();
						}
					},
					controller : function($scope, catsPromise){
						$scope.readyCats = catsPromise;
					}
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
				})
			.state('about', 
				{
					url: "/about",
					views: {
						'' : {
							templateUrl: 'components/about/about.html'
						},
						'about-dev@about' : {
							templateUrl: 'components/about/about-dev.html'	
						},
						'about-tasks@about' : {
							templateUrl: 'components/about/about-tasks.html'	
						}
					}
				});
	}]);