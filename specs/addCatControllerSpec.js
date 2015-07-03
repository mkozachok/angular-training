describe("add cat controller", function () {
    var sut, catsResource, _lastId, q;

    beforeEach(function () {
        module("app");

        mockLocation = {
            path: jasmine.createSpy()
        };

        _lastId = 10;

        mockСatsResource = {
            get: jasmine.createSpy(),
            save: jasmine.createSpy()
        };
    });

    beforeEach(inject(function ($controller, $rootScope, $q) {
        q = $q;
        sut = $rootScope.$new();
        $controller("addCatController", {
            $scope: sut,
            catsResource: mockСatsResource,
            $location: mockLocation
        });
        mockСatsResource.get.calls.argsFor(0)[0]({lastId: _lastId});
    }));

    it("will cat object", function () {
        expect(sut.cat).toBeDefined();
    });

    it("will obtain last added cat id from service", function () {
        expect(mockСatsResource.get).toHaveBeenCalled();
    });

    it("will define cat count to 0", function () {
        sut.submit();
        expect(sut.cat.count).toEqual(0);
    });

    it("will define cat id", function () {
        
        sut.submit();
        expect(sut.cat.id).toBe(_lastId + 1);
    });

    it("will save cat object on server", function () {
        sut.submit();
        expect(mockСatsResource.save).toHaveBeenCalledWith(sut.cat);
    });

    it("will redirect to '/view'", function () {
        sut.submit();
        expect(mockLocation.path).toHaveBeenCalledWith('/view');
    });
});
