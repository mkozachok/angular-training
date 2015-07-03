describe("profileLogin controller", function () {
  var sut, mockLocationPath, mockProfileService, user;

  beforeEach(function () {
    user = [{
      name: 'test',
      password: 'test',
      email: 'test@test.com'
    }];

    module("myApp");

    mockProfileService = {
      loginUser: jasmine.createSpy().and.returnValue(user)
    };

    module(function ($provide) {
      $provide.value('profileService', mockProfileService);
    });

    module("myApp.profileLogin");
  });

  beforeEach(inject(function($controller, $rootScope, $location){
    mockLocationPath = jasmine.createSpy($location, 'path');
    this.scope = $rootScope.$new();
    sut = $controller("profileLogin", {
      $scope: this.scope,
      profileService: mockProfileService,
      $location: $location
    });
  }));

  it("will check the login error message", function () {
    expect(this.scope.loginError).toBeFalsy();
  });

  it("will clear the login error message", function () {
    this.scope.loginError = true;
    this.scope.loginErrorClear();
    expect(this.scope.loginError).toBeFalsy();
  });

  it("will try to submit the login form", function () {
    this.scope.profileLogin = {
      name: {
        $valid: true
      },
      password: {
        $valid: true
      }
    };

    this.scope.name = user.name;
    this.scope.password = user.password;
    this.scope.loginProfile();

    expect(this.scope.loginError).toBeFalsy();
  });

  it("will cancel the login form", function () {
    this.scope.name = user.name;
    this.scope.password = user.password;

    this.scope.loginCancel();
    expect(this.scope.name == '' && this.scope.password == '').toBeTruthy();
  });

  it("will check access to submit", function () {
    this.scope.profileLogin = {
      name: {
        $valid: true
      },
      password: {
        $valid: true
      }
    };

    expect(this.scope.loginFormSubmitClass()).not.toBe('disabled');
  });

});
