angular.module('app').controller('homeCtrl', function($scope, $rootScope, catsFactory){
    'use strict';
    var vm = this;

    catsFactory.getCats.get().$promise.then(function(data) {
        vm.cats = data.cats;
        vm.catsFiltered = vm.cats;
        vm.selectedCat = vm.cats[0];
        $rootScope.$broadcast('cats', vm.cats);
        $rootScope.$broadcast('selectedCat', vm.selectedCat);
    }); 

    $scope.$on('change', function(events, args) {
        vm.catsFiltered = args;    
    });

    $scope.$on('performSearch', function(events, args) {  
        vm.catsFiltered = args;    
    });

    this.showCat = function(cat) {
        this.selectedCat = cat;
        //this.selectedCat.viewed = true;
        cat.viewed = true;
        $rootScope.$broadcast('selectedCat', this.selectedCat);
    };

    //this.clickedCat = false;
    //this.viewed;

});
