describe("likes service", function () {
    var sut, mockVotesService;

    beforeEach(function () {
        module("app");

        mockVotesService = {
            saveVotes: jasmine.createSpy('saveVotes'),
            updateUsers: jasmine.createSpy('updateUsers')
        };

        module(function ($provide) {
            $provide.value('votesService', mockVotesService);
        });
    });

    beforeEach(inject(function (likesService) {
        sut = likesService;
    }));

    describe("put like on cat picture", function () {
        var scope, userCookie, likedCats;

        beforeEach(function () {
            scope = { currentCat: { name : "Peter", votes : 1} };
            userCookie = "userName";
            likedCats = {"Peter" : 0};
        });

        it("check if that user liked that cat before", function () {
            sut.like(scope, userCookie, likedCats);
            expect(likedCats[scope.currentCat.name]).toEqual(1);
        });

        it("Increase cat votes for 1", function () {
            sut.like(scope, userCookie, likedCats);
            expect(scope.currentCat.votes).toBe(2);
        });

        it("Save data into cookies", function () {
            sut.like(scope, userCookie, likedCats);
            expect(mockVotesService.saveVotes).toHaveBeenCalledWith(userCookie, likedCats);
        });

       it("Save votes to server", function () {
           sut.like(scope, userCookie, likedCats);
           expect(mockVotesService.updateUsers).toHaveBeenCalledWith(userCookie);
        });
    });

    describe("put disLike on cat picture", function () {
        var scope, userCookie, likedCats;

        beforeEach(function () {
            scope = { currentCat: { name : "Peter", votes : 0} };
            userCookie = "userName";
            likedCats = {"Peter" : 1};
        });

        it("Increase cat votes for 1", function () {
            sut.disLike(scope, userCookie, likedCats);
            expect(scope.currentCat.votes).toBe(0);
        });

        it("check if that user liked that cat before", function () {
            sut.disLike(scope, userCookie, likedCats);
            expect(likedCats[scope.currentCat.name]).toEqual(0);
        });

        it("Save data into cookies", function () {
            sut.disLike(scope, userCookie, likedCats);
            expect(mockVotesService.saveVotes).toHaveBeenCalledWith(userCookie, likedCats);
        });

        it("Save votes to server", function () {
            sut.disLike(scope, userCookie, likedCats);
            expect(mockVotesService.updateUsers).toHaveBeenCalledWith(userCookie);
        });
    });


});
