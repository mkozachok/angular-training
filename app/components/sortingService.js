angular.module("app").service('sortingService', function() {
    this.sort = function(sorting){
    	var reverse = true;
		if(sorting == 'asc'){
			reverse = false;
		}
		return reverse;
	};
}
);