angular.module("app").controller("CatAddFormContoller", function ($scope, $rootScope, CatDataService) {
    
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
        CatDataService.insertCat($scope.newCatName, $scope.newCatUrl).
            success(function(data, status, headers, config) {
                $scope.postResult = data;
                $scope.newCatFormReset(form);
                console.log('catInserted brodcasted from CatFormContoller');
                $rootScope.$broadcast('catInserted', newCat);
            });       
    };    
    

});
