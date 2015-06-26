angular.module("app").directive("catsDirective", function () {
	var controller = function ($scope, $window, CatsService) {
		var vm = this;

		function successCallback(data) {
			vm.cats = data.cats;
		}

		function errorCallback(error) {
	    	console.log(error);
		}

	    vm.getCats = function () { 
	    	CatsService.cats.get().$promise.then(successCallback, errorCallback); 
	    }; 

	    vm.deleteCat = function (id) { 
	    	if ($window.confirm("Do You want to delete this cat?")) {
		    	CatsService.catById.delete({id:id}, function(cat) {
		    		vm.getCats();
		    	}); 
	    	}
	    };

	    vm.getCats();
	};

	return {
		restrict: 'EA',
	    templateUrl: "templates/CatsDirective.html",
	    scope: {}, // use isolated scope
	    controller: controller,
	    controllerAs: 'vm',
        bindToController: true
	};
});