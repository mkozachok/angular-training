angular.module("alertsModule").directive('alerts', function(){
	return {
		template: [
			'<ul style="position:absolute; right:0; top: 0; width: 200px;">',
			'  <li ng-repeat="message in messages" class="alert alert-danger">',
			'    {{message}}',
			'  </li>',
			'</ul>'
		].join('')
	};
});