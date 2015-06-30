catApp.directive('voteSpinner', function ()
{
	return {
		restrict : 'E',
		scope : {
			model : '=item'
		},
		controller: 'VoteDirectiveController',
		controllerAs: 'voteCtrl',
		bindToController: true,
		templateUrl : 'components/cats/list/voteSpinner.html'
	};
});