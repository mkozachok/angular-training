describe("sorting service", function () {
    var sut;

    beforeEach(function () {
        module("app");
    });

    beforeEach(inject(function (sortingService) {
        sut = sortingService;
    }));

    it("will return users", function () {
        expect(sut.getAllUsers().length).toBe(10);
    });
});
