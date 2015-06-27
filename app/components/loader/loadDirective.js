catApp.directive("loader", function ($rootScope) {
	return {
		link : function ($scope, element, attrs) {
			$scope.$on("loader.show", function () {
            	element.addClass("loaderActive");
        	});
        	$scope.$on("loader.hide", function () {
            	element.removeClass("loaderActive");
        	});
		}
	};
});