app.controller('CatMainCtrl', function ($scope, catService, filterFilter, promiseCats, $rootScope) {

    $scope.orderProp = 'name';
    $scope.cats = promiseCats;

    $scope.getCats = function () {
        var resource = catService.res.query();
        resource.$promise.then(function (data) {
            $scope.cats = data;
            catService.selectedCat = data[0];
        });
    };

    ////REST GET cat by id
    //$scope.getCat = function (catId) {
    //    $scope.oneCat = catService.res.get({ cat: catId });
    //};

    //REST PUT (update) cat by id
    $scope.updateCat = function (cat) {
        catService.res.update({
            'id': cat.id,
            'name': cat.name,
            'likes': cat.likes,
            'clicks': cat.clicks,
            'pic': cat.pic,
            'checked': cat.checked
        });
    };

    //REST DELETE cat by id
    $scope.deleteCat = function (catId) {
        catService.res.delete({ cat: catId }, function () {
            $scope.getCats();
        });
    }; 
    
    $scope.SelectCat = function (cat) {
        catService.selectedCat = cat;
        catService.selectedCat.checked = true;
        $rootScope.$broadcast('updateSelectedCat');
    };

    $scope.filterCats = function (element) {
        return element.name.includes(
            $scope.searchName === undefined ? "" : $scope.searchName);
    };
});

app.controller('CatAddCtrl', function ($scope, catService, $location) {

    //REST POST (add) cat
    $scope.addCat = function () {
        catService.res.save({
            'id': 'it will be changed on server',
            'name': $scope.newCat.Name,
            'likes': '0',
            'clicks': '0',
            'pic': $scope.newCat.Url,
            'checked': 'false'
        }, function () { $location.path("/app"); });
    };

});