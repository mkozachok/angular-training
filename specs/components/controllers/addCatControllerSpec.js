describe('addCatControllerTest', function() {

    describe('addCatController', function(){

        beforeEach(function() {
            module('app'); // <= initialize module that should be tested
        });

        beforeEach(inject(function($controller, $rootScope){
            $scope = $rootScope.$new();
        }));

        it('Add Cat Controller test', inject(function($controller) {
            var scope = {},
                ctrl = $controller('addCatController', { $scope: scope });
            expect(scope.title).toBe('Add Cat');
        }));
    });
});
