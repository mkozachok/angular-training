var app = angular.module('app');

app.controller('AddCatCtrl', ['$scope', 'addOrDeleteCatService',  function($scope, addOrDeleteCatService) {
        'use strict';

        $scope.addKitty = function ()
        {
            addOrDeleteCatService.addCat($scope);
        };

    }]);