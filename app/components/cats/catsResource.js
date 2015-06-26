catApp.factory('catsResource', function ($resource) {	
	return  $resource("/cats/:id", { id: '@id' },
					    {
					        'update': { method:'PUT' }
					    });
});