angular.module("app").controller("CatFormContoller", function ($scope, $filter, $http, $rootScope) {
    
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
        newCat = {};
        newCat.name = $scope.newCatName;
        newCat.url = $scope.newCatUrl;
        newCat.rating = 0;
        newCat.isViewed = false;

        $http.post('/angular-training/backend/cats.php', $filter('json')(newCat)).
            success(function(data, status, headers, config) {
                $scope.postResult = data;
                $scope.newCatFormReset(form);  
                
                $rootScope.$broadcast('catInserted', newCat);
                console.log('catInserted brodcasted from CatFormContoller');
            });       
    };    
    

});