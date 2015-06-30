app.directive('voteSpinner', function () {
    return {
        restrict: "EA",
        scope: {
            model: "="
        },
        bindToController: true,
        controller: "VoteSpinnerCtrl",
        controllerAs: "vm",
        templateUrl: 'components/shared/voteSpinner/voteSpinner.html'
    };
});