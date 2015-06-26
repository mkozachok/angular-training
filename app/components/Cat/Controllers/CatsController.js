angular.module("app").controller("CatsController", function ($scope, $window, CatsService, cats) {
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

    //vm.getCats();

    // pass cats collection from ui-router resolve object
    if (cats !== null) {
        vm.cats = cats.cats;
    }
});