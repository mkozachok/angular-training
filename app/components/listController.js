angular.module("app").controller("ListCtrl", function ($scope, $filter, catsResource, notifyService, sortingService) {
    var vm = this;
    // console.log(vm);
    var updateView = function(){
	    catsResource.getCats.get().$promise.then(function (result) {
	        vm.filteredCats = result.cats;
	        vm.cats = result.cats;
	    });
	};
	updateView();
    vm.delete = function(id){
    	catsResource.delCat.delete({catId:id});
		console.log('delete', id);
		updateView();
	};
    vm.select = function(cat){
    	notifyService.notify('chooseCat', cat);
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