angular.module('myApp.catsView', [
    'myApp.catsServices',
    'myApp.catsVoteSpinner',
    'myApp.profileServices',
    'ui.router'
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

  .controller('catsView', function ($scope, $modal, $filter, filterFilter, orderByFilter, cats, profileService, catsService) {
    'use strict';

    $scope.cats = cats;
    $scope.allCats = cats;

    $scope.openCat = function(index) {
      $scope.selected_cat = $scope.cats[index];
      $scope.selected_cat.viewed = 1;

      $modal.open({
        animation: true,
        templateUrl: 'components/cats/templates/catsModal.html',
        controller: 'catModal',
        resolve: {
          cat: function (catsService) {
            catsService.updateCat();
            return $scope.selected_cat;
          }
        }
      });
    };

    $scope.catsFilter = function() {
      $scope.cats = filterFilter($scope.allCats, {"name": $scope.name});
      $scope.cats = orderByFilter($scope.cats, $scope.order);
    };

    $scope.catAccess = function(cat) {
      if (!profileService.getLoggedUser()) {
        return false;
      }

      return cat.author === profileService.getLoggedUser();
    };

    $scope.deleteCat = function(id) {
      catsService.deleteCat(id).then(function() {
        catsService.getCats().then(function(data) {
          cats = data;
          $scope.cats = data;
          $scope.allCats = data;
        });
      });
    };
  })

  .controller('catModal', function ($scope, $modalInstance, cat) {
    $scope.cat = cat;

    $scope.close = function() {
      $modalInstance.dismiss('cancel');
    };
  });
