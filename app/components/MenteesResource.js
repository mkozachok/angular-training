angular.module("app").factory("MenteesResource", function ($resource) {
    return {
        getMentees: function () {
            return $resource('/mentees').get();
        }
    };
});