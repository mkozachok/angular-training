app.controller('VoteSpinnerCtrl', function ($scope) {
    var self = this;

    $scope.Like = function () {
        self.model.likes++;
    };

    $scope.Dislike = function () {
        self.model.likes--;
    };

});