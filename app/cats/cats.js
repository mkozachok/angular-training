'use strict';

angular.module('myApp.cats', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view', {
      templateUrl: 'cats/cats_view.html',
      controller: 'catsView'
    });
    $routeProvider.when('/add', {
      templateUrl: 'cats/cats_add.html',
      controller: 'catsAdd'
    });
  }])

  .controller('catsView', function ($scope, $filter, getCats, filterFilter, orderByFilter) {
    getCats.getData(function(data){
       $scope.cats = data;
    });

    // Default cat.
    $scope.selected_cat = $scope.cats[0];
    alert($scope.cats);

    $scope.changeCat = function(index) {
      $scope.selected_cat = $scope.cats[index];
      $scope.selected_cat.viewed = 1;
    };

    $scope.incCount = function() {
      $scope.selected_cat.count++;
    };

    $scope.like = function() {
      $scope.selected_cat.likes++;
    };

    $scope.dislike = function() {
      $scope.selected_cat.likes--;
    };

    $scope.catsFilter = function() {
      $scope.cats = filterFilter(cats, {"name": $scope.name});
      $scope.cats = orderByFilter($scope.cats, $scope.order);
    };

  })

  .controller('catsAdd', function ($scope, getCats, $location) {
    $scope.add = function() {
      if ($scope.catAdd.name.$valid && $scope.catAdd.path.$valid) {
        cats.push({
          name: $scope.name,
          path: $scope.path,
          count: 0,
          viewed: 0,
          likes: 0
        });
        $scope.name = '';
        $scope.path = '';
        $scope.catAdd.$setPristine();
        $scope.catAdd.$setUntouched();
        $location.path('/view');
      }
    };

    $scope.cancel = function(catAdd) {
      $scope.name = '';
      $scope.path = '';
      $scope.catAdd.$setPristine();
      $scope.catAdd.$setUntouched();
    };

    $scope.setClass = function() {
      if ($scope.catAdd.name.$invalid || $scope.catAdd.path.$invalid) {
        return 'disabled';
      }
      return '';
    };
  })

  .factory('getCats', function($resource) {
    return $resource('http://localhost\\:8000/cats', {}, {
      getData: {method:'GET'}
    });
  });
