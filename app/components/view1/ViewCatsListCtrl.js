'use strict';
__mainApp

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'templates/view1.html',
    controller: 'ViewCatsListCtrl'
  });
}])

.controller('ViewCatsListCtrl', 
    ['$scope', 'myCatsService', 'shareService', '$location', '$resource', 
    function($scope, mcs, share, $location, $resource) {
        $scope.cats = share.cats;
        
        this.refreshCatsCallback = function(__cats)
        {
            $scope.cats = share.cats;
            console.dir(share.cats);
           // $scope.cats = __cats;
        }
        mcs.getCats(this.refreshCatsCallback);
        $scope.selectedCat = null;
        $scope.filterBy = '';
        $scope.filterExpression = function(element)
        {
            return element.name.indexOf(share.filterExpression) == 0;
        }
        
        $scope.tooltip = [];

        $scope.selectCat = function(cat) {

            $scope.selectedCat = mcs.selectCat(cat);
            mcs.displayCat();

        };

        $scope.toggle = function() {

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
                var cat = $scope.cats[catId];
                if( cat.name.indexOf($scope.filterBy) == 0 )
                $scope.tooltip.push(cat.name);
            }

        });

        $scope.doFilter = function()
        {
            share.filterExpression = $scope.filterBy;
        }

        $scope.changeView = function(route, element)
        {
            share.selectedCat = element;
            $location.path(route);
        }

    }]);

