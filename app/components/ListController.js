angular.module("app").controller("ListControlle", function ($scope, MentorsResource) {
    var vm = this;
    console.log($scope.type);
    MentorsResource.getMentors().$promise.then(function (result) {
        vm.mentors = result.responses;
    });
});