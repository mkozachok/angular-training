'use strict';

angular.module('myApp.catsView', [
    'ngRoute',
    'ngResource',
    'myApp.catsServices'
  ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view', {
      templateUrl: 'components/cats/templates/catsView.html',
      controller: 'catsView'
    });
  }])

  .controller('catsView', function ($scope, $filter, catsService, filterFilter, orderByFilter) {

    catsService.getCats().then(
      function (data) {
        $scope.cats = data;
        $scope.allCats = $scope.cats;
        $scope.selected_cat = $scope.cats[0];
      },
      function(error) {
        alert(error);
      }
    );

    $scope.changeCat = function(index) {
      $scope.selected_cat = $scope.cats[index];
      $scope.selected_cat.viewed = 1;
    };

    $scope.incCount = function() {
      $scope.selected_cat.count++;
    };

    $scope.vote = function() {
      $scope.selected_cat.votes++;
    };

    $scope.disvote = function() {
      $scope.selected_cat.votes--;
    };

    $scope.catsFilter = function() {
      $scope.cats = filterFilter($scope.allCats, {"name": $scope.name});
      $scope.cats = orderByFilter($scope.cats, $scope.order);
    };
  });
