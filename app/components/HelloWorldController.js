angular.module("app").controller("HelloWorldController", function ($scope, $window, HelloWorldService) {
    $scope.users = HelloWorldService.getAllUsers();
    $scope.showUserId = function (user) {
        $window.alert(user.id);
    };
});