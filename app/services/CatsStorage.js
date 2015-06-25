catApp.factory('catsStorage', function (catsFactory, filterFilter, orderByFilter) {
	
	var get = function(){
		return catsFactory.query().$promise;
	};

	var update = function(cat){
		catsFactory.update(cat);
	};

	var filter = function(cats, flt){
		return filterFilter(orderByFilter(cats, flt.OrderBy), flt.Value);
	};

	var vote = function (cat, dir){
		cat.votes = cat.votes + 1 * dir;
		if (cat.votes < 0)
			cat.votes = 0;
		update(cat);
	};
	
	var click = function (cat){
		cat.count++;
	};

	return {
		get : get,
		update : update,
		filter : filter,
		vote : vote,
		click : click
	};
});