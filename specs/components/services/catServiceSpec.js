xdescribe('catsServiceTest', function() {
    var $httpBackend,
        authService;

    //angular.module('ngStorage', []);
    //angular.module('ngCookies', []);


    beforeEach(module('app'));

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        catsService = $injector.get('catsService');
        //$httpBackend.whenGET('/cats').respond({token: '123', user: {name: 'test'}});
        //$httpBackend.whenPOST('/register').respond();
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingRequest();
        $httpBackend.verifyNoOutstandingExpectation();
    });

    it('should run if can register', function() {
        catsService.getCats();
        $httpBackend.expectGET('/cats');
        $httpBackend.flush();
    });

    //it('should run if can login', function() {
    //    authService.login('test');
    //    $httpBackend.expectPOST('/auth', 'test');
    //    $httpBackend.flush();
    //
    //});
});