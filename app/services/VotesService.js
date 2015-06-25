catApp.factory('votesService', function ($cookieStore, catsResource, indetityService) {
	var key = 'cat-upvotes';	

	var upvote = function (cat){
		var votes = $cookieStore.get(key) || [];
		
		if (_.contains(votes, cat.id) === false){
			votes.push(cat.id);
		}		
	
		if (indetityService.canVote(cat)){
			indetityService.currentProfile.votes = votes;
			cat.votes++;
		}

		$cookieStore.put(key, votes);
		catsResource.update(cat);
		indetityService.save();
	};

	var downvote = function (cat) {		
		var votes = $cookieStore.get(key) || [];		
		var catIndex = _.indexOf(votes, cat.id);
		
		if (catIndex > -1) {
    		votes.splice(catIndex, 1);
    		$cookieStore.put(key, votes);
		}

		if (cat.votes > 0)
			cat.votes--;

		indetityService.currentProfile.votes = votes;
		catsResource.update(cat);
		indetityService.save();
	};

	return {
		upvote : upvote,
		downvote: downvote
	};
});