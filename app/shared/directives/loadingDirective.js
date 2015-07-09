var app = angular.module('app');

app.directive('loading',function ($http, $timeout)
    {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs)
            {
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.isLoading, function (v)
                {
                    if(v){
                       elm.addClass('loading').removeClass('loaded');
                    }
                    else{
                    	$timeout( function(){
                    		elm.addClass('loaded').removeClass('loading');
                    	}, 1000);
                    }
                });
            }
        };

    });