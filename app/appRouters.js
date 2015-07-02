var app = angular.module('app');

app.config(['$httpProvider','$stateProvider','$urlRouterProvider', function ($httpProvider, $stateProvider, $urlRouterProvider) {

    $httpProvider.interceptors.push('userInterceptor');

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state(
        {
            name:'home',
            url: '/home',
            templateUrl: 'component/home/templates/home.html',
            controller: 'HomeCtrl',
            resolve:{
                promiseObj:  function(KittyFactory){
                    var getCats = KittyFactory.get();
                    getCats.$promise.then(function (response) {
                        return response;
                    });
                    return getCats.$promise;
                }
            }
        })
        .state({
            name: 'addCat',
            url: '/add_cat',
            templateUrl: 'component/addCat/addCat.html',
            controller: 'addCatCtrl'
        })
        .state({
            name: 'about',
            url: '/about',
            template: '<h1>Creator of this site... Mr.Catlord</h1>'
        })
        .state({
            name: 'authorization',
            url: '/authorization',
            templateUrl: 'component/authorization/templates/authorization.html',
            controller: 'loginCtrl',
            resolve:{
                userObj:  function(UserFactory){
                    var getUsers = UserFactory.get();
                    getUsers.$promise.then(function (response) {
                        return response;
                    });
                    return getUsers.$promise;
                }
            }
        })
        .state({
            name: 'registration',
            url: '/registration',
            templateUrl: 'component/authorization/templates/registration.html',
            controller: 'RegistrationCtrl',
            resolve:{
                UserForChekObj:  function(UserFactory){
                    var getUsers = UserFactory.get();
                    getUsers.$promise.then(function (response) {
                        return response;
                    });
                    return getUsers.$promise;
                }
            }
        });
}]);

