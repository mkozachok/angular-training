angular.module('myApp.catsVoteSpinner', [
    'myApp.catsServices',
    'myApp.profileServices'
  ])

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
              return user !== cat.author && (cat.votedBy.length && cat.votedBy.indexOf(user) === -1);
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
