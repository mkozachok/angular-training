angular.module("app").directive("voteSpinner", function () {
    return {
        templateUrl: "home/templates/voteSpinner.html",
        replace: true
        //scope: {
        //    name: '=name'
        //}
    };
});
