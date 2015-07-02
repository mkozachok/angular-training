__mainApp
.directive("loginForm", function () {
 
    return {
        restrict: "E"
        ,replace: true
        ,templateUrl: 'templates/login/directives/loginForm.html'
        ,controller: 'loginCtrl'
        ,controllerAs: 'login'
        ,scope: true
    };
});