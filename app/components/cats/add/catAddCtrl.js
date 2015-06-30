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