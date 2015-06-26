var about = angular.module('about', []);

about.controller('AboutController', function(){
	var vm = this;

	vm.tasks = [{Name : "Controllers"}, {Name : "Services"}, {Name : "Directives"}, {Name : "Routes"}];

	vm.getTasks = function() {
		return vm.tasks;
	};
});