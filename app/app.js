var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.
      when('/', {
          templateUrl: 'list.html',
          controller: 'CatMainCtrl'
      }).
      when('/add', {
          templateUrl: 'add.html',
          controller: 'CatAddCtrl'
      }).
      otherwise({redirectTo: '/'});
}]);

app.config(['$resourceProvider', function ($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

app.factory('catFactory', function () {
    //Not used so fat

    //var factory = {};
    //var cats = [
    //    { id: 0, name: "Merin", clicks: 0, pic: "/Res/pic1.png" },
    //    { id: 1, name: "Linda", clicks: 0, pic: "/Res/pic2.png" },
    //    { id: 2, name: "Jenny", clicks: 0, pic: "/Res/pic3.png" },
    //    { id: 3, name: "Bobby", clicks: 0, pic: "/Res/pic4.png" },
    //    { id: 4, name: "Dendy", clicks: 0, pic: "/Res/pic5.png" }
    //];

    //factory.getCats = function () {
    //    return cats;
    //};

    //return factory;

});

app.service('catService',['$resource', function ($resource) {
    
    this.res = $resource('/cats/:cat', { cat: '@cat' }, {
        update: {
            method: 'PUT'
        }
    });

}]);

app.controller('CatMainCtrl', function ($scope, catService, filterFilter) {

    //REST GET cats
    $scope.getCatList = function () {
        $scope.cats = catService.res.query();
        $scope.cats.$promise.then(function () { $scope.selectedCat = $scope.cats[0]; });
        
    };
    
    //REST GET cat by id
    $scope.getCat = function (catId) {
        $scope.oneCat = catService.res.get({ cat: catId });
    };

    //REST PUT (update) cat by id
    $scope.updateCat = function (cat) {
        catService.res.update({
            'id': cat.id,
            'name': cat.name,
            'likes': cat.likes,
            'clicks': cat.clicks,
            'pic': cat.pic,
            'checked': cat.checked
        });
    };

    //REST DELETE cat by id
    $scope.deleteCat = function (catId) {
        catService.res.delete({ cat: catId }, function () {
            $scope.getCatList();
        });
    };




    $scope.getCatList();

    $scope.orderProp='name';

    $scope.Click = function () {
        $scope.selectedCat.clicks++;
    };

    $scope.Like = function () {
        $scope.selectedCat.likes++;
    };

    $scope.Dislike = function () {
        $scope.selectedCat.likes--;
    };

    $scope.SelectCat = function (cat) {
        $scope.selectedCat = cat;
        $scope.selectedCat.checked = true;
    };

    $scope.filterCats = function (element) {
        return element.name.includes($scope.searchName === undefined ? "" : $scope.searchName);
    };
});

app.controller('CatAddCtrl', function ($scope, catService, $location) {
    
    //REST POST (add) cat
    $scope.addCat = function () {
        catService.res.save({
            'id': 'it will be changed on server',
            'name': $scope.newCat.Name,
            'likes': '0',
            'clicks': '0',
            'pic': $scope.newCat.Pic,
            'checked': 'false'
        }, function () { $location.path("/app"); });
    };

});
