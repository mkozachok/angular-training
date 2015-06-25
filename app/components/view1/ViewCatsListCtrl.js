'use strict';
angular.module('app')

.config(['$routeProvider', function($routeProvider) {
    console.log('route view 1');
  $routeProvider.when('/view1', {
    templateUrl: 'templates/view1.html',
    controller: 'ViewCatsListCtrl'
  });
}])

.controller('ViewCatsListCtrl', 
    ['$scope', 'myCatsService', 'shareService', '$location', '$resource', 
    function($scope, mcs, share, $location, $resource) {
        $scope.cats = [];
        mcs.getCats($scope.cats);
        $scope.selectedCat = null;
        $scope.filterBy = '';
        $scope.filterExpression = function(element)
        {
            return element.name.indexOf(share.filterExpression) == 0;
        }
        
        $scope.tooltip = [];

        $scope.selectCat = function(cat) {
            console.log('Current selected cat');
            console.log($scope.selectedCat);
            $scope.selectedCat = mcs.selectCat(cat);
            mcs.displayCat();

        };

        $scope.toggle = function() {
            console.log('Toggle cat:');
            console.log($scope.selectedCat);
            console.log(typeof $scope.selectedCat);

            if(typeof $scope.selectedCat == 'object' )
            {
                $scope.selectedCat.click++;
            }
        };

        $scope.voteUp = function() 
        {
                mcs.voteCatUp();
        }

        $scope.voteDown = function() 
        {
                mcs.voteCatDown();
        }

        $scope.$watch('filterBy', function() {
             $scope.tooltip = [];
             if($scope.filterBy == '') return;
            for(var catId in $scope.cats)
            {
                cat = $scope.cats[catId];
                if( cat.name.indexOf($scope.filterBy) == 0 )
                $scope.tooltip.push(cat.name);
            }
            console.log($scope.filterBy + ':');
            console.log($scope.tooltip);

        });

        $scope.doFilter = function()
        {
            share.filterExpression = $scope.filterBy;
            console.log(share.filterExpression);
        }

        $scope.changeView = function(route, element)
        {
            share.selectedCat = element;
            $location.path(route);
        }

    }]);

