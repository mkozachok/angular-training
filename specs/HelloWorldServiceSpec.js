describe("alerting service", function () {
    var sut, mockTimeout;

    beforeEach(function () {
        module("app");

        mockTimeout = jasmine.createSpy();

        module(function ($provide) {
            $provide.value('$timeout', mockTimeout);
        });
    });

    beforeEach(inject(function (alerting) {
        sut = alerting;
    }));

    it("will contain hardcoded alertTypes", function () {
        expect(sut.alertTypes).toEqual(["success", "info", "warning", "danger"]);
    });

    describe("add alert", function () {
        var type, message;
        beforeEach(function () {
            type = "type";
            message = "message";
        });

        it("will add alert into the stack", function () {
            sut.addAlert(type, message);
            expect(sut.currentAlerts).toEqual([{type: type, message: message}]);
        });

        it("will call $timeout service with otions", function () {
            sut.addAlert(type, message);
            expect(mockTimeout).toHaveBeenCalledWith(jasmine.any(Function), 5000);
        });

        xit("will remove alert after 5 secs", function () {
            sut.addAlert(type, message);
            console.dir(mockTimeout);
            mockTimeout.calls[0].args[0]();
            expect(sut.currentAlerts.length).toBe(0);
        });
    });
});
