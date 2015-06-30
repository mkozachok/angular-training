catApp.controller('CatDetailController', function($stateParams, catsService) {

	var vm = this;
  			
	vm.click = function (cat){
		cat.count++;
		catsService.update(cat);
	};		

	var onCreate = function (){
		// select cat by id
		var catId = parseInt($stateParams.id);
		catsService.one(catId).then(function(cat){
			cat.is_viewed = 1;
			catsService.update(cat);
			vm.current = cat;
		});
	};

	onCreate();
});
	