catApp.controller('AppController', function($scope, indetityService){
	var vm = this;

	vm.currentUser = indetityService.currentUser;

	$scope.$watch(
		function() { 
			return indetityService.currentUser;
		}, 
		function (){
			vm.currentUser = indetityService.currentUser;
	});});