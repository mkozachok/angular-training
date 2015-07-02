__mainApp
.directive("profileForm", function () {
 
    return {
        restrict: "E"
        ,replace: true
        ,templateUrl: 'templates/profile/directives/profileForm.html'
        ,controller: 'profileCtrl'
        ,controllerAs: 'profile'
        ,scope: true
    };
});