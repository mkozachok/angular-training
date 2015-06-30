angular.module("app").controller("ListCtrl", function ($filter, catsResource, notifyService, sortingService) {
    var vm = this;
    // console.log(vm);
    var updateView = function(){
	    catsResource.get().$promise.then(function (result) {
	        vm.filteredCats = result.cats;
	        vm.cats = result.cats;
	    });
	};
	updateView();
    vm.delete = function(catId){
    	catsResource.delete({'catId':catId});
		updateView();
		vm.select('');
	};
    vm.select = function(cat){
    	notifyService.notify('chooseCat', cat);
    	console.log(vm);
    };
    vm.sorting = 'asc';
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