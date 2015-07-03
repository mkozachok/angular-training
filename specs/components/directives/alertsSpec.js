xdescribe("alerts directive", function () {
    var sut, mockAlerting, element;
    beforeEach(function () {
        module("app");

        sut = "alerts";

        mockAlerting = {
            removeAlert: jasmine.createSpy(),
            currentAlerts: "currentAlerts"
        };

        module(function ($provide) {
            $provide.value('alerting', mockAlerting);
        });
    });

    beforeEach(inject(function ($compile, $rootScope, $httpBackend) {
        $httpBackend.when('/templates/alerts.html').exp;
        this.parentScope = $rootScope.$new();
        this.parentScope.y = 10;
        element = $compile('<' + sut + '></' + sut + '>')(this.parentScope);
        this.scope = element.scope();
    }));

    it("will have x", function () {
        expect(this.scope.currentAlerts).toBe(mockAlerting.currentAlerts);
    });
});
