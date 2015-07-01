catApp.controller('AppController', function($scope, indetityService, alertService, recoveryService, $modal){
	var vm = this;

	vm.currentUser = indetityService.currentUser;
	vm.alerts = alertService.get();

	$scope.$on("alerts.new", function(event, alert){
		var modalInstance = $modal.open({
                templateUrl: '/components/alert/alert.html',
                controller: 'AlertController',
                controllerAs: 'vm',
                resolve: {
                    data: function() {
                        return {
                            itemToView: alert
                        };
                    }
                }
            });
		modalInstance.result.then(function(result){
			recoveryService.tryRecover(result.request);
		});
	});

	$scope.$watch(
		function() { 
			return indetityService.currentUser;
		}, 
		function (){
			vm.currentUser = indetityService.currentUser;
	});});