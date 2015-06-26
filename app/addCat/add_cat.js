var app = angular.module('app');

app.controller('AddCatCtrl', ['$scope', 'addCatService',  function($scope, addCatService) {
        'use strict';

        $scope.addKitty = function ()
        {
            addCatService.addCat($scope);
        };

    }]);