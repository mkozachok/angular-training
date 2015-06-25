//'use strict';

angular.module('app')

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
        $scope.addCatResultMessage = '';

        $scope.addCat = function()
        {
            var result = mcs.addCat($scope.catName, $scope.catImage);
            console.log('AddCatListCtrl result');
            console.log(JSON.stringify(result) );

            $scope.selectedCat = result.cat;

             $scope.addCatResultMessage = result.result.Message;

        }

}]);

