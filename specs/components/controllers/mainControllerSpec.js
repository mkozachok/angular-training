describe('mainController', function () {

    var $scope;

    beforeEach(function () {
        module('app'); // <= initialize module that should be tested
    });

    beforeEach(module('app', function ($provide) {
        $provide.value('cats', [{name: 'Test Cat'}, {name: 'Cat'}]);
        $provide.value('catsService', {
            getCats: [{name: 'Test Cat'}, {name: 'Cat'}]
        });
    }));

    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.$new();
    }));

    it('Check default sort option', inject(function ($controller) {
        var ctrl = $controller('mainController', {$scope: $scope});
        expect($scope.sort).toBe('name');
    }));

    it('Check showed cat', inject(function ($controller) {
        var ctrl = $controller('mainController', {$scope: $scope});
        $scope.$apply();
        expect($scope.showedCat.name).toBe('Cat');
    }));
});
