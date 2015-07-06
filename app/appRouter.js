var app = angular.module('app');
app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $httpProvider) {
    	$httpProvider.interceptors.push('modalErrorInterceptor');

		$urlRouterProvider.otherwise('/cats-list');

		$stateProvider
		.state('home', {
			abstract: true,
		  url: '/',
		  templateUrl: 'components/home/home.html',
		})
		.state('home.catsList', {
			url: 'cats-list',
		  	views: {
		        "cats" : {
		        	templateUrl: 'components/home/catsList/catsList.html',
			  		controller: 'catsListController as list',
			  		resolve: {
		                catsCollection:  function(catsResource){
		                    var getCats = catsResource.get();
		                    return getCats.$promise;
		                }
		            }
		        },            
		        "choose" : {
		        	templateUrl: 'components/home/chooseCat/chooseCat.html',
			  		controller: 'chooseCatController as choose'
		        }
		    }
		})

		.state('add', {
			url: '/add',
			templateUrl: 'components/addCat/addCat.html',
			controller: 'addCatController'
		})

		.state('register', {
			url: '/register',
			templateUrl: 'components/profile/register/register.html',
			controller: 'registerController as register'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'components/profile/login/login.html',
			controller: 'loginController as login'
		})
		.state({
            name: 'about',
            url: '/about',
            template: '<h2>Creator of this site: <h1>Volodymyr Maykher</h1></h2>'
        });
}]);