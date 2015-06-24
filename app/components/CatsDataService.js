angular.module("app").factory("CatsDataService", function ($http, $filter) {



    getAllCats = function () {
        return $http.get('/angular-training/backend/cats.php');
    };
    
    
    
    insertCat = function (catName, catUrl) {
        newCat = {};
        newCat.name = catName;
        newCat.url = catUrl;
        newCat.rating = 0;
        newCat.isViewed = false; 
        
        return $http.post('/angular-training/backend/cats.php', $filter('json')(newCat));
    };
    
    

    return {
        getAllCats: getAllCats,
        insertCat: insertCat
    };
    
    
    
});
