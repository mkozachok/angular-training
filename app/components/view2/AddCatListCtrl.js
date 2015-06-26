//'use strict';

__mainApp

.config(['$routeProvider', function($routeProvider) {
    console.log('route view 2');
  $routeProvider.when('/view2', {
    templateUrl: 'templates/view2.html',
    controller: 'AddCatListCtrl'
  });
}])

.controller('AddCatListCtrl', ['$scope', 'myCatsService', function($scope, mcs) {
        $scope.catName = '';
        $scope.catImage='http://';
        $scope.result = [];
        
        $scope.refreshAddResult = function(result)
        {
            $scope.result = result.result;
        }

        $scope.addCat = function()
        {
            mcs.addCat($scope.catName, $scope.catImage, $scope.refreshAddResult);
        }

}]);

