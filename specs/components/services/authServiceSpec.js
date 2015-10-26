describe('authServiceTest', function() {
    var $httpBackend,
        $window,
        authService;

    //angular.module('ngStorage', []);
    //angular.module('ngCookies', []);


    beforeEach(module('app'));

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $window = $injector.get('$window');
        authService = $injector.get('authService');
        $httpBackend.whenPOST('/auth').respond({status: 'success', token: '123', user: {name: 'test'}});
        $httpBackend.whenPOST('/register').respond();

        //spyOn($window.localStorage, 'setItem');
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingRequest();
        $httpBackend.verifyNoOutstandingExpectation();
    });

    it('should run if can register', function() {
        authService.register('test');
        $httpBackend.expectPOST('/register', 'test');
        $httpBackend.flush();
    });

    it('should run if can login', function() {
       // $httpBackend.whenPOST('/auth').respond({token: '123', user: {name: 'test'}});

        authService.login('test');
        $httpBackend.expectPOST('/auth', 'test');
        $httpBackend.flush();

        expect(authService.getToken()).toBe('123');
        expect(authService.getUser()).toEqual({name: 'test'});
        //expect($window.localStorage.setItem).toHaveBeenCalledWith('token', '123');

    });
});