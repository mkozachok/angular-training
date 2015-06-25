angular.module('app').controller('homeSearchCtrl', function($scope, $rootScope, searchService, sortMethodService){
    'use strict';
    var vm = this;
    this.searchText = '';
    this.myOptions = sortMethodService.myOptions;
    
    $scope.$on('cats', function(events, args) {
        vm.cats = args;
    });
 
    this.change = function() {
        this.catsFiltered = sortMethodService.change(this.cats, this.sortMethod);
        $rootScope.$broadcast('change', this.catsFiltered);
    };

    this.performSearch = function() {
        this.catsFiltered = searchService.performSearch(this.cats, this.searchText);
        $rootScope.$broadcast('performSearch', this.catsFiltered);
    };

});