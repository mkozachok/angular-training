describe("add cat controller", function () {
    var sut, mockAddDeleteUpdateCatService, mockCookieStore;

    beforeEach(function () {
        module("app");

        mockAddDeleteUpdateCatService = {
            addCat: jasmine.createSpy('addCat')
        };

        mockCookieStore = {
            get: jasmine.createSpy('get').and.returnValue('Lala')
        };

    });

    beforeEach(inject(function ($controller, $rootScope) {
        sut = $rootScope.$new();
        $controller("addCatCtrl", {
            $scope: sut,
            $cookieStore: mockCookieStore,
            addDeleteUpdateCatService: mockAddDeleteUpdateCatService
        });
    }));

    it("check for user active", function () {
        expect(mockCookieStore.get).toHaveBeenCalledWith('user');
    });


    it("if user is active", function () {
        expect(sut.userActive).toBe(1);
        expect(sut.userName).toBe('Lala');
    });

    describe('When you use method addKitty from $scope', function() {
        it("add cat", function () {
            sut.addKitty();
            expect(mockAddDeleteUpdateCatService.addCat).toHaveBeenCalledWith(sut);
        });
    });

});

