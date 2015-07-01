angular.module("app").directive("voteSpinner", function () {
    return {
        templateUrl: "shared/voteSpinner/voteSpinner.html",
        replace: true
        //scope: {
        //    name: '=name'
        //}
    };
});
