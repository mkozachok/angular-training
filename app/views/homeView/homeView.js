angular.module('app').controller('HomeViewCtrl', function($scope, catsFactory, searchService, sortMethodService){
    'use strict';

    catsFactory.getCats.get().$promise.then(function(data) {
        $scope.cats = data.cats;
        $scope.catsFiltered = $scope.cats;
        $scope.selectedCat = $scope.cats[0];
    }); 

    $scope.clickedCat = false;

    $scope.searchText = '';
    $scope.myOptions = sortMethodService.myOptions;

    //$scope.viewed;

    $scope.myCount = function(cat) {
        //$scope.selectedCat.clicks ++;
        cat.clicks ++;
    };

    $scope.showCat = function(cat) {
        $scope.selectedCat = cat;
        //$scope.selectedCat.viewed = true;
        cat.viewed = true;
    };

    $scope.likeCat = function(cat) {
        cat.likes++;
    };

    $scope.dislikeCat = function(cat) {
        cat.likes--;
    };

    $scope.change = function(){
        $scope.catsFiltered = sortMethodService.change($scope.cats, $scope.sortMethod);
    };

    $scope.performSearch = function() {
        $scope.catsFiltered = searchService.performSearch($scope.cats, $scope.searchText);
    };

});
