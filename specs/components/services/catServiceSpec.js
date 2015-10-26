describe('catsServiceTest', function() {
    var $httpBackend,
        authService,
        cats;

    //angular.module('ngStorage', []);
    //angular.module('ngCookies', []);


    beforeEach(module('app'));
    beforeEach(module('app', function ($provide) {

    }));

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        catsService = $injector.get('catsService');
        $httpBackend.whenGET('/cats').respond([{name: 'Test Cat'}, {name: 'Cat'}]);

        cats = catsService.getCats();
        //$httpBackend.whenPOST('/register').respond();
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingRequest();
        $httpBackend.verifyNoOutstandingExpectation();
    });

    it('should run if can register', function() {

        //$httpBackend.expectGET('/cats');
        //$httpBackend.flush();
    });

    //it('should run if can login', function() {
    //    authService.login('test');
    //    $httpBackend.expectPOST('/auth', 'test');
    //    $httpBackend.flush();
    //
    //});
});