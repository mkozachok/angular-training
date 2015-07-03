describe("profile services", function () {
  var sut,
    mockLocalStorageService,
    user = [{
      name: 'test',
      password: 'test',
      email: 'test@test.com'
    }];

  beforeEach(function () {
    module("myApp");

    module(function($provide){
      $provide.service('LocalStorageService', function(){
        this.get = jasmine.createSpy();
        this.set = jasmine.createSpy();
        this.cookie = jasmine.createSpy();
        this.cookie.set = jasmine.createSpy();
        this.cookie.get = jasmine.createSpy();
      });
    });

    module("myApp.profileServices");
  });

  beforeEach(inject(function(LocalStorageService, profileService){
    mockLocalStorageService = LocalStorageService;
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
    sut.registerUser(user);
    sut.loginUser(user.name, user.password);
    sut.logoutUser();
    expect(sut.getLoggedUser()).toBeFalsy();
  });
});
