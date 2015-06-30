var app = angular.module('app', ['ngResource', /*'ngRoute',*/ 'ui.router']);

app.config(['$resourceProvider', function ($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

app.config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/cats");

    // Now set up the states
    $stateProvider

      .state('cats', {
          url: "/cats",
          templateUrl: "list.html",
          views: {
              catList: {
                  templateUrl: 'list.html',
                  controller: 'CatMainCtrl',
                  controllerAs: '$CatMainCtrl'
              },
              catDetails: {
                  templateUrl: 'catDetails.html',
                  controller: 'CatDetailsCtrl',
                  controllerAs: '$CatDetailsCtrl'
              },
          },
          resolve: {
              promiseCats: function (catService) {
                  var resource = catService.res.query();
                  resource.$promise.then(function (data) {
                      catService.selectedCat = data[0];
                      return data;
                  });

                  return resource;
              },
          }
      })

      .state('add', {
          url: "/add",
          templateUrl: "add.html",
          controller: 'CatAddCtrl',
          controllerAs: '$CatAddCtrl'
      });
});



//app.config(["$routeProvider", function ($routeProvider) {
//    $routeProvider.
//      when('/', {
//          templateUrl: 'list.html',
//          controller: 'CatMainCtrl'
//      }).
//      when('/add', {
//          templateUrl: 'add.html',
//          controller: 'CatAddCtrl'
//      }).
//      otherwise({redirectTo: '/'});
//}]);

