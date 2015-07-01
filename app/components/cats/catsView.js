

angular.module('myApp.catsView', [
    'myApp.catsServices',
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

      if (cat.author === profileService.getLoggedUser()) {
        return true;
      }
      return false;
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
  })

  .directive('modal', function () {
    return {
      templateUrl: 'components/cats/templates/catsModal.html',
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        visible: '=?',
        cat: '=?'
      },
      link: function (scope, element) {
        scope.$watch('visible', function(value){
          if (value === true) {
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
  })

  .directive('voteSpinner', function () {
    return {
      templateUrl: 'components/cats/templates/voteSpinner.html',
      restrict: 'AE',
      replace: true,
      scope: {
        cat: '='
      },
      controller: function($scope, catsService, profileService) {
        $scope.voteAccess = function(cat) {
          if (!angular.isUndefined(cat)) {
            var user = profileService.getLoggedUser();

            if (user) {
              if (user == cat.author || (cat.votedBy.length && cat.votedBy.indexOf(user) !== -1)) {
                return false;
              }
              else {
                return true;
              }
            }
            else {
              return false;
            }
          }
          return false;
        };

        $scope.voteAccessMessage = function (cat) {
          if (!angular.isUndefined(cat)) {
            var user = profileService.getLoggedUser();

            if (user) {
              if (user == cat.author) {
                return 'You cannot vote for own cat!';
              }
              else if (cat.votedBy.length && cat.votedBy.indexOf(user) !== -1) {
                return 'You have already voted for this cat!';
              }
            }
            else {
              return 'Please login to vote this cat!';
            }
          }
          return '';
        };

        $scope.vote = function(cat) {
          var user = profileService.getLoggedUser();

          cat.votes++;
          cat.votedBy.push(user);
          catsService.updateCat(cat);
        };

        $scope.disvote = function(cat) {
          var user = profileService.getLoggedUser();

          cat.votes--;
          cat.votedBy.push(user);
          catsService.updateCat(cat);
        };
      }
    };
  });
