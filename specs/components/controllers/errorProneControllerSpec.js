xdescribe("errorPhoneController", function () {
    var sut, mockAlerting, mockHttpGet;
    beforeEach(function () {
        module("app");

        mockAlerting = {
            addAlert: jasmine.createSpy(),
            errorHandler: jasmine.createSpy(),
            alertTypes: []
        };


    });

    beforeEach(inject(function ($controller, $http, $rootScope) {
        mockHttpGet = jasmine.createSpy($http, 'get');
        this.scope = $rootScope.$new();
        sut = $controller("errorProneController as model", {
            $scope: this.scope,
            alerting: mockAlerting,
            $http: $http
        });
    }));

    afterEach(function () {
        //...
    });

    it("will be truthy", function () {
        expect(this.scope.isTrue).toBeTrue();
    });

});
