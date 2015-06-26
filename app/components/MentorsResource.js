angular.module("app").factory("MentorsResource", function ($resource) {
    return {
        getMentors: function () {
            return $resource('/mentors').get();
        }
    };
});