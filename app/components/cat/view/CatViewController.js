angular.module("app").controller("CatViewContoller", function ($scope, $filter, $http) {
    
    
    $scope.$on(
        'activeCatChanged',
        function(event, newActiveCat) {
            console.log('activeCatChanged detected in CatViewContoller');   
            
            $scope.activeCat = newActiveCat; 
            $scope.activeCat.isViewed = true;            
        }
    );
        
    
    
    $scope.catRateUp = function () {
        $scope.activeCat.rating++;
    };
    
    

    $scope.catRateDown = function () {
        newActiveCatRating = $scope.activeCat.rating - 1;

        if (newActiveCatRating < 0) {
            newActiveCatRating = 0;
        }
        
        $scope.activeCat.rating = newActiveCatRating;
    };
    
    

});
