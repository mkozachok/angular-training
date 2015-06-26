var app = angular.module('app');
//.config(['$routeProvider', function($routeProvider) {
//    $routeProvider.when('/add_cat', {
//        templateUrl: 'templates/add_cat.html'
//    });
//}]);

app.controller('AddCatCtrl', ['$scope', '$resource', 'KittyFactory',  function($scope, $resource, KittyFactory) {
        'use strict';
        var resource = KittyFactory;

        $scope.addKitty = function ()
        {
            var temp = {name: $scope.kittyName, img: $scope.kittyImg, count:0, v:0, votes: 0 };
            resource.save(temp);
            $scope.kittyName = '';
            $scope.kittyImg = '';
        };

    }]);