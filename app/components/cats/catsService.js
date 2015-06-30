catApp.factory('catsService', function (catsResource, filterFilter, orderByFilter, votesService) {	
	var cats = [];

	var all = function(){
		return catsResource.query().$promise.then(function(result){
			cats = result;
			return result;
		});
	};

	var one = function(id) {
		return catsResource.get({id : id}).$promise;
	};

	var update = function(cat){
		catsResource.update(cat);
	};

	var save = function(cat){
		var id = _.max(cats) || 0;
		catsResource.save({
					"id" : id + 1,
					"name": cat.name, 
					"src": cat.src, 
					"count":0,
					"is_viewed": cat.is_viewed,
					"votes":0
				 });
	};

	var remove = function(cat){
		catsResource.remove({id : cat.id});
	};


	var filter = function(cats, flt){
		return filterFilter(orderByFilter(cats, flt.OrderBy), flt.Value);
	};

	var vote = function (cat, dir){		
		if (dir === 1) {
			votesService.upvote(cat);
		}
		else {
			votesService.downvote(cat);
		}
	};
	
	var click = function (cat){
		cat.count++;
		catsResource.update(cat);
	};

	return {
		all : all,
		one : one,
		update : update,
		save : save,
		remove : remove,
		filter : filter,
		vote : vote,
		click : click
	};
});