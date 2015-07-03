describe("profile services", function () {
  var sut, mockLocalStorageService;
  var user;
  beforeEach(function () {
    user = {
      name: 'test',
      password: 'test',
      email: 'test@test.com'
    };

    module("myApp");

    mockLocalStorageService = {
      get: jasmine.createSpy().and.returnValue(user),
      set: jasmine.createSpy(),
      cookie: {
        get: jasmine.createSpy().and.returnValue(user),
        set: jasmine.createSpy(),
        remove: jasmine.createSpy().and.returnValue(true)
      }
    };

    module(function ($provide) {
      $provide.value('localStorageService', mockLocalStorageService);
    });

    module("myApp.profileServices");
  });

  beforeEach(inject(function(profileService){

    sut = profileService;
  }));

  it("will register and login user", function () {
    sut.registerUser(user);
    expect(sut.loginUser(user.name, user.password)).toBeTruthy();
  });

  it("will check logged user", function () {
    sut.registerUser(user);
    sut.loginUser(user.name, user.password);
    expect(sut.getLoggedUser()).toEqual(user.name);
  });

  it("will check logout process", function () {
    expect(sut.logoutUser()).toBeTruthy();
  });
});
