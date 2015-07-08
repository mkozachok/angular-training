angular.module("app").controller("catsListController", function ($filter, catsResource, notifyService, sortingService, catsCollection, profileService) {
    var vm = this;
    vm.loggedUsername = profileService.getLoggedUsername();
    vm.filteredCats = catsCollection.cats;
    vm.cats = catsCollection.cats;

    var updateView = function(){
	    catsResource.get().$promise.then(function (result) {
	        vm.filteredCats = result.cats;
	        vm.cats = result.cats;
	    });
	};

    vm.delete = function(catId){
    	catsResource.delete({'catId':catId});
		updateView();
	    notifyService.notify('deleteCat', catId);
	};

    vm.select = function(cat){
    	notifyService.notify('chooseCat', cat);
    };

	vm.sort = function(){
		vm.reverse = sortingService.sort(vm.sorting);
	};

	vm.search = function(substr){
		vm.filteredCats = $filter('filter')(vm.cats, { name: substr });
	};

	vm.startSearch = function(substr){
		if(substr.length > 2){
			vm.search(substr);
		}
		else {
			vm.filteredCats = vm.cats;
		}
	};
});