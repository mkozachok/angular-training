catApp.controller('CatAddController', function(catsService, $state) {
		var vm = this;

		this.addCat = function (form, cat){
			if (form.$valid) {
				cat.is_viewed = 0;
				catsService.save(cat);
				$state.go("/");
			}
		};
});