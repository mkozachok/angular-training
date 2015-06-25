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
    $scope.visible = false;

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
      $scope.visible = true;
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
  })

  .directive('modal', function () {
    return {
      templateUrl: 'components/cats/templates/modal.html',
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        visible: '=?',
        title: '=?'
      },
      link: function (scope, element, attrs) {
        attrs.$observe('title', function(value) {
          scope.title = value;
        });

        scope.$watch('visible', function(value){
          if (value == true){
            $(element).modal('show');
          }
          else{
            $(element).modal('hide');
          }
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function () {
            scope.visible = true;
          });
        });

        $(element).on('hidden.bs.modal', function() {
          scope.$apply( function() {
            scope.visible = false;
          });
        });
      }
    };
  });
