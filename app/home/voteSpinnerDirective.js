angular.module("app").directive("voteSpinner", function () {
    return {
        templateUrl: "templates/voteSpinner.html",
        replace: true
        //scope: {
        //    name: '=name'
        //}
    };
});
