angular.module('app').controller('homeCatCtrl', function($scope, $rootScope) {
    'use strict';
    var vm = this;

    $scope.$on('selectedCat', function(events, args) {
        vm.selectedCat = args;    
    });

    this.myCount = function(cat) {
        //this.selectedCat.clicks ++;
        cat.clicks ++;
    };

    this.likeCat = function(cat) {
        cat.likes++;
    };

    this.dislikeCat = function(cat) {
        cat.likes--;
    };
});
