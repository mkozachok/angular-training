angular.module("app").controller("CatAddFormContoller", function ($scope, $rootScope, CatsDataService) {
    
    $scope.newCat = {};
    
    $scope.newCatName = '';
    $scope.newCatUrl = '';
    $scope.newCatPhotoPreviewUrl = '';
    $scope.newCatPhotoPreviewVisibility = false;
    
    
    $scope.postResult = '';    

    
    $scope.$watch('newCatUrl', function(newVal, oldVal) {
        if (newVal !== '') {
            var im = document.getElementById('newCatPhotoPreview');

            im.onerror = function() {
                $scope.$applyAsync( function () {
                    $scope.newCatPhotoPreviewVisibility = false;
                });
            };  
            
            im.onload = function() {
                $scope.$applyAsync( function () {
                    $scope.newCatPhotoPreviewVisibility = true;
                });
            };  
            
            $scope.newCatPhotoPreviewUrl = newVal;   
        } else {
            $scope.newCatPhotoPreviewVisibility = false;
        }
    });
    
    
    $scope.newCatFormReset = function (form) {
        $scope.newCatName = '';
        $scope.newCatUrl = '';
        
        form.$setPristine();
        form.$setUntouched();        
    };


    $scope.newCatFormSubmit = function (form) {
        CatsDataService.insertCat($scope.newCatName, $scope.newCatUrl).
            success(function(data, status, headers, config) {
                $scope.postResult = data;
                $scope.newCatFormReset(form);
                $rootScope.$broadcast('catInserted', newCat);
                console.log('catInserted brodcasted from CatFormContoller');
            });       
    };    
    

});
