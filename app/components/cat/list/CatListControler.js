angular.module("app").controller("CatListContoller", function ($scope, $rootScope, $filter, CatsDataService) {
    
    
    
    CatsDataService.getAllCats().
        success(
            function(data, status, headers, config) {
                $scope.cats = data;
                $scope.catActivate($scope.cats[0]);
            }
        ); 
        
    

    $scope.catNameFilter = "";
    $scope.catSortReverce = 0;


    
    $scope.catActivate = function (newActiveCat) {
        console.log('activeCatChanged brodcasted from CatViewContoller'); 
        $rootScope.$broadcast('activeCatChanged', newActiveCat);
    };
    
    
    
    $scope.catFilterByName = function () {
        $scope.catNameFilter = $scope.catNameFilterRaw;
    };
    
    
    
    $scope.$watch(
        'catSortReverce',
        function(newVal, oldVal) {
            if ($scope.cats) {
                $scope.cats = $filter('orderBy')($scope.cats, 'name', newVal == "1");
                $scope.catActivate($scope.cats[0]);
            }
        }
    );
    
    
    
    $scope.$on(
        'catInserted',
        function(event, newCat) {
            console.log('catInserted detected in CatListContoller');     
            $scope.cats.push(newCat);
        }
    );
    
    

});
