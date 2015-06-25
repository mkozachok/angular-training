angular.module("app").controller("CatViewContoller", function ($scope) {
    
    
    $scope.activeCat = {};
    
    
    $scope.$on(
        'activeCatChanged',
        function(event, newActiveCat) {
            console.log('activeCatChanged detected in CatViewContoller. ' + Math.random());   
            
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
