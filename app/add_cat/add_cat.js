'use strict';

angular.module('myApp.add_cat', ['ngRoute', 'ngResource'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/add_cat', {
        templateUrl: 'add_cat/add_cat.html',
        controller: 'AddCatCtrl'
    });
}])

.controller('AddCatCtrl', ['$scope', '$resource', 'KittyFactory',  function($scope, $resource, KittyFactory) {
        var resource = KittyFactory;

        $scope.addKitty = function ()
        {
            var temp = {name: $scope.kittyName, img: $scope.kittyImg, count:0, v:0, votes: 0 };
            resource.save(temp);
            $scope.kittyName = '';
            $scope.kittyImg = '';
        };

    }]);