app.directive('catAdder', function () {
    return {
        restrict: 'A',
        templateUrl: 'directives/catAdder.html'
    };
});

app.directive('catDetails', function () {
    return {
        restrict: 'A',
        templateUrl: 'directives/catDetails.html',
        scope: {
            catInfo: '=info'
        }
    };
});

app.directive('autofocus1', function ($timeout) {
    return {
        restrict: 'A',
        link: function ($scope, $element) {
            $timeout(function () {
                $element[0].focus();
            });
        }
    };
});

app.directive('ngEnter', function ($document) {
    return {
        restrict: "EA",
        scope: {
            ngEnter: "&"
        },
        link: function (scope, element, attrs) {
            $document.bind("keydown", function (event) {
                if (event.which === 13) {
                    scope.ngEnter();
                    event.preventDefault();
                }
            });
        }
    };
});

app.directive('catImg', function () {
    return {
        restrict: "EA",
        scope: {
            model: "="
        },
        bindToController: true,
        controller: "CatImgCtrl",
        controllerAs: "vm",
        templateUrl: 'directives/catImg.html'
    };
});

app.directive('voteSpinner', function () {
    return {
        restrict: "EA",
        scope: {
            model: "="
        },
        bindToController: true,
        controller: "VoteSpinnerCtrl",
        controllerAs: "vm",
        templateUrl: 'directives/voteSpinner.html'
    };
});