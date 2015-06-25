'use strict';

angular.module('myApp.factory', [])
.factory('catsFactory', function($resource){
    return $resource('/cats');             
});