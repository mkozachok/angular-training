

angular.module('myApp.catsView', [
    'myApp.catsServices', 'ui.router'
  ])

  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('catspage', {
      url: '/view',
      templateUrl: 'components/cats/templates/catsView.html',
      controller: 'catsView',
      resolve: {
        cats: function(catsService) {
          return catsService.getCats();
        }
      }
    });
  }])

  .controller('catsView', function ($scope, $filter, filterFilter, orderByFilter, cats, profileService) {
    'use strict';

    $scope.visible = false;
    $scope.cats = cats;
    $scope.allCats = $scope.cats;

    $scope.changeCat = function(index) {
      $scope.selected_cat = $scope.cats[index];
      $scope.selected_cat.viewed = 1;
      $scope.visible = true;
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

    $scope.catAccess = function(cat) {
      if (!profileService.getLoggedUser()) {
        return false;
      }

      if (cat.author === profileService.getLoggedUser()) {
        return true;
      }
      return false;
    };
  })

  .directive('modal', function () {
    return {
      templateUrl: 'components/cats/templates/catsModal.html',
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
          if (value === true){
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
